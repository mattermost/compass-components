export type TColorDefinition = {
    type: string;
    values: number[];
};

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value: number, min = 0, max = 1) {
    if (process.env.NODE_ENV !== 'production') {
        if (value < min || value > max) {
            // eslint-disable-next-line no-console
            console.error(`Compass Components: The value provided ${value} is out of range [${min}, ${max}].`);
        }
    }

    return Math.min(Math.max(min, value), max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
export function hexToRgb(color: string): string {
    const colorValues = color.substr(1);

    const re = new RegExp(`.{1,${colorValues.length >= 6 ? 2 : 1}}`, 'g');
    let colors = colorValues.match(re);

    if (colors && colors[0].length === 1) {
        colors = colors.map(n => n + n);
    }

    return colors
        ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
              .map((n, index) => {
                  return index < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
              })
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
export function rgbToHex(color: string): string {
    // Idempotent
    if (color.indexOf('#') === 0) {
        return color;
    }

    const { values } = decomposeColor(color);
    return `#${values.map(n => intToHex(n)).join('')}`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
export function hslToRgb(color: string): string {
    const decomposedColor = decomposeColor(color);
    const { values } = decomposedColor;
    const h = values[0];
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number, k = (n + h / 30) % 12): number => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    let type = 'rgb';
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

    if (decomposedColor.type === 'hsla') {
        type += 'a';
        rgb.push(values[3]);
    }

    return recomposeColor({ type, values: rgb });
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
export function decomposeColor(color: string): TColorDefinition {
    if (color.charAt(0) === '#') {
        return decomposeColor(hexToRgb(color));
    }

    const marker = color.indexOf('(');
    const type = color.substring(0, marker);

    if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
        throw new Error(
            'Compass Components: Unsupported `%s` color.\n' +
                'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'
        );
    }

    const valueString = color.substring(marker + 1, color.length - 1);
    const values = valueString.split(',').map(value => parseFloat(value));

    return { type, values };
}

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
export function recomposeColor(color: TColorDefinition): string {
    const { type, values } = color;
    let newValues: string[] | number[] = [];

    if (type.indexOf('rgb') !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        newValues = values.map((n, i) => (i < 3 ? parseInt(n.toString(), 10) : n));
    } else if (type.indexOf('hsl') !== -1) {
        newValues[1] = `${values[1]}%`;
        newValues[2] = `${values[2]}%`;
    }

    return `${type}(${newValues.join(', ')})`;
}

const shadeValues: Record<string, number> = {
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
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @param {number} shade - 100 | 200 | ... | 800
 * @returns {string} A CSS color string
 */
export function recomposeWithShade(color: TColorDefinition, shade: string): string {
    const { values, type } = color;
    const hslValues = [...values];
    hslValues[0] = values[0];
    hslValues[1] = values[1] / 100;
    hslValues[2] = shadeValues[shade];
    const hslString = `${type}(${hslValues.join(', ')})`
    return hslToRgb(hslString);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function alpha(color: string, value: number) {
    const decomposedColor = decomposeColor(color);
    value = clamp(value);

    if (decomposedColor.type === 'rgb' || decomposedColor.type === 'hsl') {
        decomposedColor.type += 'a';
    }

    decomposedColor.values[3] = value;

    return recomposeColor(decomposedColor);
}

function rgbToHsl(rgbArr: number[]) {
    const r = rgbArr[0] / 255;
    const g = rgbArr[1] / 255;
    const b = rgbArr[2] / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    //Calculate L:
    let h = 0;
    let s = 0;
    let l = (max + min) / 2;

    if (max !== min) {
        //Calculate S:
        if (l < 0.5) {
            s = (max - min) / (max + min);
        } else {
            s = (max - min) / (2.0 - max - min);
        }

        //Calculate H:
        switch (true) {
            case r === max:
                h = (g - b) / (max - min);
                break;
            case g === max:
                h = 2.0 + (b - r) / (max - min);
                break;
            case b === max:
                h = 4.0 + (r - g) / (max - min);
                break;
        }
    }

    h *= 60;
    s *= 100;
    l *= 100;

    if (h < 0) {
        h += 360;
    }

    return [h, s, l];
}

export function createColorShades(color: string) {
    const decomposedColor = decomposeColor(color);
    const colorShadeMap: Record<string, string> = {};

    if (decomposedColor.type.indexOf('hsl') < 0) {
        decomposedColor.type = `hsl${decomposedColor.values.length > 3 ? 'a' : ''}`;
        decomposedColor.values = rgbToHsl(decomposedColor.values);
    }

    Object.keys(shadeValues).forEach(key => (colorShadeMap[key] = recomposeWithShade(decomposedColor, key)));

    return colorShadeMap;
}
