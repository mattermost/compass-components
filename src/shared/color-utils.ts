import { normal } from 'color-blend';

import { TBaseColorShade } from '../foundations/colors/colors.types';
import { TThemeColorDefinition } from '../foundations/theme-provider/themes/theme.types';
import colors from '../foundations/colors';

import Utils from './utils';

type TColorDefinition = {
    type: string;
    values: number[];
};

/**
 * We only support those values as valid color inputs
 */
const supportedColorTypes = ['rgb', 'rgba', 'hsl', 'hsla'];

/**
 * The property name (100 | 200 | ... | 800) describes the swatch shade.
 * Values stored for each shade are the luminance values for HSL
 */
const shadeValues: Record<TBaseColorShade, number> = {
    100: 0.8,
    200: 0.72,
    300: 0.64,
    400: 0.56,
    500: 0.48,
    600: 0.4,
    700: 0.32,
    800: 0.24,
};

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color: string): string {
    const colorValues = color.slice(1);

    const re = new RegExp(`.{1,${colorValues.length >= 6 ? 2 : 1}}`, 'gu');

    let splitColors = colorValues.match(re);

    if (splitColors && splitColors[0].length === 1) {
        splitColors = splitColors.map((n) => n + n);
    }

    return splitColors
        ? `rgb${splitColors.length === 4 ? 'a' : ''}(${splitColors
              .map((n, index) =>
                  index < 3
                      ? Number.parseInt(n, 16)
                      : Math.round((Number.parseInt(n, 16) / 255) * 1000) / 1000
              )
              .join(', ')})`
        : '';
}

function intToHex(int: number): string {
    const hex = int.toString(16);

    return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHex(color: string): string {
    // Idempotent
    if (color.indexOf('#') === 0) {
        return color;
    }

    const { values } = decomposeColor(color);

    return `#${values.map((n) => intToHex(n)).join('')}`;
}

/**
 * Converts a color from CSS rgb format to CSS hsl format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHsl(color: string): string {
    const { values } = decomposeColor(color);

    const hslValues = rgbToHslValues(values);
    const type = `hsl${values.length > 3 ? 'a' : ''}`;

    return recomposeColor({ type, values: hslValues });
}

/**
 * Converts an array of rgb values to hsl values
 * @param {number[]} rgbArray - RGB color-array
 * @returns {number[]} array that holds hsl values
 */
function rgbToHslValues(rgbArray: number[]): number[] {
    const r = rgbArray[0] / 255;
    const g = rgbArray[1] / 255;
    const b = rgbArray[2] / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Calculate L:
    let h = 0;
    let s = 0;
    let l = (max + min) / 2;

    if (max !== min) {
        // Calculate S:
        s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);

        // Calculate H:
        switch (true) {
            case r === max:
                h = (g - b) / (max - min);
                break;
            case g === max:
                h = 2 + (b - r) / (max - min);
                break;
            case b === max:
                h = 4 + (r - g) / (max - min);
                break;
            default:
                break;
        }
    }

    h = Math.round(h * 60);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    if (h < 0) {
        h += 360;
    }

    if (rgbArray[3] || rgbArray[3] === 0) {
        return [h, s, l, Utils.clamp(rgbArray[3])];
    }

    return [h, s, l];
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color: string): string {
    const decomposedColor = decomposeColor(color);
    const { values } = decomposedColor;
    const [h] = values;
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number, k = (n + h / 30) % 12): number =>
        l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    let type = 'rgb';

    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

    if (decomposedColor.type === 'hsla') {
        type += 'a';
        rgb.push(values[3]);
    }

    return recomposeColor({ type, values: rgb });
}

/**
 * Returns an object with the typography and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {typography: string, values: number[]}
 */
function decomposeColor(color: string): TColorDefinition {
    if (color.charAt(0) === '#') {
        return decomposeColor(hexToRgb(color));
    }

    const marker = color.indexOf('(');
    const type = color.slice(0, Math.max(0, marker));

    if (!supportedColorTypes.includes(type)) {
        throw new Error(
            'Compass Components: Unsupported `%s` color.\n' +
                'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'
        );
    }

    const valueString = color.slice(marker + 1, -1);
    const values = valueString.split(',').map((value) => Number.parseFloat(value));

    return { type, values };
}

/**
 * Converts a color object with typography and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.typography - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function recomposeColor(color: TColorDefinition): string {
    const { type, values } = color;

    let newValues: (string | number)[] = values;

    if (type.includes('rgb')) {
        // Only convert the first 3 values to int (i.e. not alpha)
        newValues = values.map((n, index) => (index < 3 ? Number.parseInt(n.toString(), 10) : n));
    } else if (type.includes('hsl')) {
        newValues[1] = `${values[1]}%`;
        newValues[2] = `${values[2]}%`;
    }

    return `${type}(${newValues.join(', ')})`;
}

/**
 * Converts a color object with typography and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.typography - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @param {number} shade - 100 | 200 | ... | 800
 * @param {boolean} darker - some colors are best converted to darker shades (starting luminance -16%)
 * @returns {string} A CSS color string
 */
function recomposeColorWithShade(
    color: TColorDefinition,
    shade: TBaseColorShade,
    darker: boolean
): string {
    const { values, type } = color;
    const hslValues: string[] = [];

    let luminanceCorrection = 0;

    switch (true) {
        case darker && shade <= 100:
            luminanceCorrection -= 0.16;
            break;
        case darker && shade > 100 && shade <= 600:
            luminanceCorrection -= 0.24;
            break;
        case darker && shade > 600 && shade <= 700:
            luminanceCorrection -= 0.2;
            break;
        case darker && shade > 700:
            luminanceCorrection -= 0.16;
            break;
        default:
            break;
    }

    hslValues[0] = `${values[0]}`;
    hslValues[1] = `${values[1]}%`;
    hslValues[2] = `${(shadeValues[shade] + luminanceCorrection) * 100}%`;

    const hslString = `${type}(${hslValues.join(', ')})`;

    return hslToRgb(hslString);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function setAlpha(color: string, value: number): string {
    const decomposedColor = decomposeColor(color);

    const clampedValue = Utils.clamp(value);

    if (decomposedColor.type === 'rgb' || decomposedColor.type === 'hsl') {
        decomposedColor.type += 'a';
    }

    decomposedColor.values[3] = clampedValue;

    return recomposeColor(decomposedColor);
}

function createColorShades(color: string, darker = false): Record<string, string> {
    const decomposedColor = decomposeColor(color);
    const colorShadeMap: Record<string, string> = {};

    if (!decomposedColor.type.includes('hsl')) {
        decomposedColor.type = 'hsl';
        decomposedColor.values = rgbToHslValues(decomposedColor.values);
    }

    for (const key of Object.keys(shadeValues)) {
        colorShadeMap[key] = recomposeColorWithShade(
            decomposedColor,
            (key as unknown) as TBaseColorShade,
            darker
        );
    }

    return colorShadeMap;
}

// Use the same logic as
// Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
function getContrastText(background: string): string {
    return getContrastRatio('#000000', background) >= 7 ? '#000000' : '#FFFFFF';
}

function createThemeColor(color: string, shade?: TBaseColorShade): TThemeColorDefinition {
    if (colors[color] && shade && colors[color][shade]) {
        if (shade <= 200) {
            Utils.warn(
                `compass-omponents/createThemeColor: a shade of ${shade} might be insufficient. We will create shades with tonal offset for you, but it might still not be enough. Consider using a higher shade value.`
            );
        }

        if (shade >= 700) {
            Utils.warn(
                `compass-omponents/createThemeColor: a shade of ${shade} might be insufficient. We will create shades with tonal offset for you, but it might still not be enough. Consider using a higher shade value.`
            );
        }

        return {
            lighter:
                shade >= 100 ? colors[color][shade - 200] : lighten(colors[color][shade], 0.34),
            light: shade >= 200 ? colors[color][shade - 100] : lighten(colors[color][shade], 0.17),
            main: colors[color][shade],
            dark: shade <= 600 ? colors[color][shade + 100] : darken(colors[color][shade], 0.17),
            darker: shade <= 700 ? colors[color][shade + 100] : darken(colors[color][shade], 0.34),
            contrast: getContrastText(colors[color][shade]),
        };
    }

    const themeColor: TThemeColorDefinition = {
        lighter: '',
        light: lighten(color, 0.17),
        main: color,
        dark: darken(color, 0.17),
        darker: '',
        contrast: getContrastText(color),
    };

    themeColor.lighter = lighten(themeColor.light, 0.17);
    themeColor.darker = darken(themeColor.dark, 0.17);

    return themeColor;
}

/**
 * Converts any given valid and supported color string to rgb
 * @param {string} color - color string
 * @returns {string} rgb color string
 */
function convertToRgb(color: string): string {
    const colorString = color.startsWith('hsl') ? hslToRgb(color) : color;
    const decomposedColor = decomposeColor(colorString);

    return recomposeColor(decomposedColor);
}

function blendColors(baseColor: string, layerColor: string): string {
    const decomposedBase = decomposeColor(convertToRgb(baseColor));
    const decomposedLayer = decomposeColor(convertToRgb(layerColor));

    const base = {
        r: decomposedBase.values[0],
        g: decomposedBase.values[1],
        b: decomposedBase.values[2],
        a:
            decomposedBase.values[3] === undefined || Number.isNaN(decomposedBase.values[3])
                ? 1
                : decomposedBase.values[3],
    };

    const layer = {
        r: decomposedLayer.values[0],
        g: decomposedLayer.values[1],
        b: decomposedLayer.values[2],
        a:
            decomposedLayer.values[3] === undefined || Number.isNaN(decomposedLayer.values[3])
                ? 1
                : decomposedLayer.values[3],
    };

    const mixed = normal(base, layer);

    return recomposeColor({ type: 'rgba', values: [mixed.r, mixed.g, mixed.b, mixed.a] });
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground: string, background: string): number {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);

    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color: string): number {
    const decomposedColor = decomposeColor(color);

    let rgb =
        decomposedColor.type === 'hsl'
            ? decomposeColor(hslToRgb(color)).values
            : decomposedColor.values;

    rgb = rgb.map((value) =>
        value <= 0.039_28 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
    );

    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color: string, coefficient: number): string {
    const decomposedColor = decomposeColor(color);
    const clampedCoefficient = Utils.clamp(coefficient);

    if (decomposedColor.type.includes('hsl')) {
        decomposedColor.values[2] *= 1 - clampedCoefficient;
    } else if (decomposedColor.type.includes('rgb')) {
        for (let index = 0; index < 3; index += 1) {
            decomposedColor.values[index] *= 1 - clampedCoefficient;
        }
    }

    return recomposeColor(decomposedColor);
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color: string, coefficient: number): string {
    const decomposedColor = decomposeColor(color);
    const clampedCoefficient = Utils.clamp(coefficient);

    if (decomposedColor.type.includes('hsl')) {
        decomposedColor.values[2] += (100 - decomposedColor.values[2]) * clampedCoefficient;
    } else if (decomposedColor.type.includes('rgb')) {
        for (let index = 0; index < 3; index += 1) {
            decomposedColor.values[index] +=
                (255 - decomposedColor.values[index]) * clampedCoefficient;
        }
    }

    return recomposeColor(decomposedColor);
}

export {
    setAlpha,
    convertToRgb,
    decomposeColor,
    recomposeColor,
    recomposeColorWithShade,
    hexToRgb,
    hslToRgb,
    rgbToHex,
    rgbToHsl,
    createColorShades,
    blendColors,
    darken,
    lighten,
    getContrastRatio,
    getContrastText,
    createThemeColor,
};
