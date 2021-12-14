import {
    setLuminance,
    getLuminance,
    getContrastRatio,
    Utils,
    getSaturation,
    setSaturation,
    convertToHsl,
    darken,
    lighten,
} from '../../../shared';

import type { TTheme, TCustomThemeColors, TThemeColor } from './theme.types';

import { denim, lightTheme } from './index';

const CONTRAST_THRESHOLD = 3.2;

const getContrastLuminance = (color: string): number => {
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

    return baseLuminance + (contrastRatios.light >= 3.2 ? 72 : -72);
};

const createPaletteColor = (color: string, saturation?: number): TThemeColor => {
    const baseColor = convertToHsl(color);
    const baseLuminance = getLuminance(baseColor);

    const contrastLuminance = getContrastLuminance(baseColor);
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
        },
    };
};

const createTheme = (colors: TCustomThemeColors): TTheme => {
    const {
        primary = denim.primary,
        secondary = denim.secondary,
        tertiary = denim.tertiary,
        background = denim.background,
        mention = denim.mention,
    } = colors;

    return {
        ...lightTheme,
        palette: {
            primary: createPaletteColor(primary),
            secondary: createPaletteColor(secondary),
            tertiary: createPaletteColor(tertiary),
            alert: createPaletteColor('#D24B4E'),
            warning: createPaletteColor('#FFBC1F'),
            success: createPaletteColor('#3DB887'),
            info: createPaletteColor('#5D89EA'),
        },
        background: {
            light: lighten(background, 0.04),
            main: background,
            dark: darken(background, 0.04),
        },
        text: {
            primary: setLuminance(background, getContrastLuminance(background)),
            secondary: setLuminance(background, getContrastLuminance(background) - 4),
        },
        mention: createPaletteColor(mention),
    };
};

export default createTheme;
