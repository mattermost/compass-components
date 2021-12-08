import {
    setLuminance,
    getLuminance,
    getContrastRatio,
    Utils,
    setAlpha,
    getSaturation,
    setSaturation,
    convertToHsl,
} from '../../../shared';

import type { TNewTheme, TCustomThemeColors, TNewThemeColor } from './theme.types';

import { denim, lightTheme } from './index';

const CONTRAST_THRESHOLD = 3.2;

const createPaletteColor = (color: string, saturation?: number): TNewThemeColor => {
    const baseColor = convertToHsl(color);
    const baseLuminance = getLuminance(baseColor);

    // determine the best contrast ratio
    const contrastRatios = {
        dark: getContrastRatio(baseColor, setLuminance(baseColor, baseLuminance - 72)),
        light: getContrastRatio(baseColor, setLuminance(baseColor, baseLuminance + 72)),
    };

    Utils.assert(
        contrastRatios.dark < CONTRAST_THRESHOLD && contrastRatios.light < CONTRAST_THRESHOLD,
        'Neither contrast ratios (darker and lighter color) are high enough. The colors can still be used, but readability might be influenced',
        true
    );

    const contrastLuminance = baseLuminance + (contrastRatios.light >= 3.2 ? 72 : -72);

    const contrastSaturation = Utils.isNumber(saturation) ? saturation : getSaturation(baseColor);
    const contrastColor = setLuminance(
        setSaturation(baseColor, contrastSaturation),
        contrastLuminance
    );

    return {
        0: setLuminance(baseColor, baseLuminance + 16),
        50: setLuminance(baseColor, baseLuminance + 12),
        100: setLuminance(baseColor, baseLuminance + 8),
        200: setLuminance(baseColor, baseLuminance + 4),
        300: baseColor,
        400: setLuminance(baseColor, baseLuminance - 4),
        500: setLuminance(baseColor, baseLuminance - 8),
        600: setLuminance(baseColor, baseLuminance - 12),
        700: setLuminance(baseColor, baseLuminance - 16),
        a00: setAlpha(baseColor, 0),
        a04: setAlpha(baseColor, 0.04),
        a08: setAlpha(baseColor, 0.08),
        a12: setAlpha(baseColor, 0.12),
        a16: setAlpha(baseColor, 0.16),
        a20: setAlpha(baseColor, 0.2),
        a24: setAlpha(baseColor, 0.24),
        a28: setAlpha(baseColor, 0.28),
        a32: setAlpha(baseColor, 0.32),
        a36: setAlpha(baseColor, 0.36),
        a40: setAlpha(baseColor, 0.4),
        a44: setAlpha(baseColor, 0.4),
        a48: setAlpha(baseColor, 0.48),
        a52: setAlpha(baseColor, 0.52),
        a56: setAlpha(baseColor, 0.56),
        a60: setAlpha(baseColor, 0.6),
        a64: setAlpha(baseColor, 0.64),
        a68: setAlpha(baseColor, 0.68),
        a72: setAlpha(baseColor, 0.72),
        contrast: {
            0: setLuminance(contrastColor, contrastLuminance + 16),
            50: setLuminance(contrastColor, contrastLuminance + 12),
            100: setLuminance(contrastColor, contrastLuminance + 8),
            200: setLuminance(contrastColor, contrastLuminance + 4),
            300: contrastColor,
            400: setLuminance(contrastColor, contrastLuminance - 4),
            500: setLuminance(contrastColor, contrastLuminance - 8),
            600: setLuminance(contrastColor, contrastLuminance - 12),
            700: setLuminance(contrastColor, contrastLuminance - 16),
            a00: setAlpha(contrastColor, 0),
            a04: setAlpha(contrastColor, 0.04),
            a08: setAlpha(contrastColor, 0.08),
            a12: setAlpha(contrastColor, 0.12),
            a16: setAlpha(contrastColor, 0.16),
            a20: setAlpha(contrastColor, 0.2),
            a24: setAlpha(contrastColor, 0.24),
            a28: setAlpha(contrastColor, 0.28),
            a32: setAlpha(contrastColor, 0.32),
            a36: setAlpha(contrastColor, 0.36),
            a40: setAlpha(contrastColor, 0.4),
            a44: setAlpha(contrastColor, 0.44),
            a48: setAlpha(contrastColor, 0.48),
            a52: setAlpha(contrastColor, 0.52),
            a56: setAlpha(contrastColor, 0.56),
            a60: setAlpha(contrastColor, 0.6),
            a64: setAlpha(contrastColor, 0.64),
            a68: setAlpha(contrastColor, 0.68),
            a72: setAlpha(contrastColor, 0.72),
        },
    };
};

const themeGenerator = (colors: TCustomThemeColors): TNewTheme => {
    const {
        navigation = denim.navigation,
        content = denim.content,
        mention = denim.mention,
        primary = denim.primary,
        secondary = denim.secondary,
        tertiary = denim.tertiary,
    } = colors;

    const palettes = {
        navigation: createPaletteColor(navigation),
        content: createPaletteColor(content, 12),
        mention: createPaletteColor(mention, getSaturation(navigation)),
        primary: createPaletteColor(primary),
        secondary: createPaletteColor(secondary),
        tertiary: createPaletteColor(tertiary),
        alert: createPaletteColor('#D24B4E'),
        warning: createPaletteColor('#FFBC1F'),
        success: createPaletteColor('#3DB887'),
        info: createPaletteColor('#5D89EA'),
    };

    return {
        ...lightTheme,
        palettes,
    };
};

export default themeGenerator;
