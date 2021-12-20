import { getContrastRatio, getHslValues, Utils } from '../../../shared';

import type {
    TCustomThemeColors,
    TTheme,
    TTHemeBackgroundColors,
    TThemeColor,
    TTHemeTextColors,
} from './theme.types';

function getDefaultPrimary(): TThemeColor {
    return {
        light: 'hsl(221, 77%, 56%)',
        main: 'hsl(221, 77%, 52%)',
        dark: 'hsl(221, 77%, 48%)',
        darker: 'hsl(221, 77%, 44%)',
        contrast: 'hsl(221, 77%, 100%)',
    };
}

function getDefaultSecondary(): TThemeColor {
    return {
        light: 'hsl(203, 83%, 64%)',
        main: 'hsl(203, 83%, 60%)',
        dark: 'hsl(203, 83%, 56%)',
        darker: 'hsl(203, 83%, 52%)',
        contrast: 'hsl(203, 83%, 0%)',
    };
}

function getDefaultTertiary(): TThemeColor {
    return {
        light: 'hsl(180, 79%, 64%)',
        main: 'hsl(180, 79%, 60%)',
        dark: 'hsl(180, 79%, 56%)',
        darker: 'hsl(180, 79%, 52%)',
        contrast: 'hsl(180, 79%, 0%)',
    };
}

function getDefaultMention(): TThemeColor {
    return getDefaultSecondary();
}

function getDefaultSuccess(): TThemeColor {
    return {
        light: 'hsl(156, 50%, 56%)',
        main: 'hsl(156, 50%, 52%)',
        dark: 'hsl(156, 50%, 48%)',
        darker: 'hsl(156, 50%, 44%)',
        contrast: 'hsl(156, 50%, 100%)',
    };
}

function getDefaultWarning(): TThemeColor {
    return {
        light: 'hsl(42, 100%, 64%)',
        main: 'hsl(42, 100%, 60%)',
        dark: 'hsl(42, 100%, 56%)',
        darker: 'hsl(42, 100%, 52%)',
        contrast: 'hsl(42, 100%, 0%)',
    };
}

function getDefaultAlert(): TThemeColor {
    return {
        light: 'hsl(359, 60%, 64%)',
        main: 'hsl(359, 60%, 60%)',
        dark: 'hsl(359, 60%, 56%)',
        darker: 'hsl(359, 60%, 52%)',
        contrast: 'hsl(359, 60%, 100%)',
    };
}

function getDefaultInfo(): TThemeColor {
    return {
        light: 'hsl(221, 77%, 72%)',
        main: 'hsl(221, 77%, 68%)',
        dark: 'hsl(221, 77%, 64%)',
        darker: 'hsl(221, 77%, 60%)',
        contrast: 'hsl(221, 77%, 100%)',
    };
}

function getDefaultBackground(): TTHemeBackgroundColors {
    return {
        light: 'hsl(0, 0%, 100%)',
        main: 'hsl(0, 0%, 100%)',
        dark: 'hsl(0, 0%, 96%)',
    };
}

function getDefaultText(): TTHemeTextColors {
    return {
        primary: 'hsl(0, 0%, 28%)',
        secondary: 'hsl(0, 0%, 40%)',
        disabled: 'hsl(0, 0%, 52%)',
    };
}

const recomposeHSLA = (values: number[]): string =>
    `hsla(${values[0]}, ${values[1]}%, ${values[2]}%, ${values[3] || 1})`;

const getContrastLuminance = (color: number[] | string): number => {
    const [h, s, l, a = 1] = Utils.isString(color) ? getHslValues(color) : color;
    // determine the contrast ratio in comparison to a light color
    const contrastRatioToLight = getContrastRatio(
        recomposeHSLA([h, s, l, a]),
        recomposeHSLA([h, s, Utils.clamp(l + 72, 0, 100), a])
    );

    return Utils.clamp(l + (contrastRatioToLight >= 3.2 ? 72 : -72), 0, 100);
};

const createPaletteColor = (color: string, saturation?: number): TThemeColor => {
    const values = getHslValues(color);
    const [h, s, l, a = 1] = values;
    const contrastValues = values;

    contrastValues[1] = Utils.isNumber(saturation) ? saturation : values[1];
    contrastValues[2] = getContrastLuminance(values);

    return {
        light: recomposeHSLA([h, s, Utils.clamp(l + 4, 0, 100), a]),
        main: color,
        dark: recomposeHSLA([h, s, Utils.clamp(l - 4, 0, 100), a]),
        darker: recomposeHSLA([h, s, Utils.clamp(l - 8, 0, 100), a]),
        contrast: recomposeHSLA(contrastValues),
    };
};

const createBackground = (color: string): TTHemeBackgroundColors => {
    const [h, s, l, a = 1] = getHslValues(color);

    return {
        light: recomposeHSLA([h, s, Utils.clamp(l + 4, 0, 100), a]),
        main: color,
        dark: recomposeHSLA([h, s, Utils.clamp(l - 4, 0, 100), a]),
    };
};

const createText = (color: string): TTHemeTextColors => {
    const contrastValues = getHslValues(color);

    contrastValues[2] = getContrastLuminance(contrastValues);

    const [h, , l, a = 1] = contrastValues;

    return {
        primary: recomposeHSLA([h, 12, l, a]),
        secondary: recomposeHSLA([h, 12, Utils.clamp(l - 8, 0, 100), a]),
        disabled: recomposeHSLA([h, 12, Utils.clamp(l - 16, 0, 100), a]),
    };
};

// eslint-disable-next-line complexity
const createThemePalette = (
    options?: TCustomThemeColors,
    palette?: TTheme['palette']
): TTheme['palette'] => {
    const primary = options?.primary || palette?.primary || getDefaultPrimary();
    const secondary = options?.secondary || palette?.secondary || getDefaultSecondary();
    const tertiary = options?.tertiary || palette?.tertiary || getDefaultTertiary();
    const success = options?.success || palette?.success || getDefaultSuccess();
    const warning = options?.warning || palette?.warning || getDefaultWarning();
    const alert = options?.alert || palette?.alert || getDefaultAlert();
    const info = options?.info || palette?.info || getDefaultInfo();
    const mention = options?.mention || palette?.mention || getDefaultMention();
    const background = options?.background || palette?.background || getDefaultBackground();
    const text =
        options?.background && Utils.isString(options.background)
            ? createText(options.background)
            : palette?.text;

    return {
        primary: Utils.isString(primary) ? createPaletteColor(primary) : primary,
        secondary: Utils.isString(secondary) ? createPaletteColor(secondary) : secondary,
        tertiary: Utils.isString(tertiary) ? createPaletteColor(tertiary) : tertiary,
        success: Utils.isString(success) ? createPaletteColor(success) : success,
        warning: Utils.isString(warning) ? createPaletteColor(warning) : warning,
        alert: Utils.isString(alert) ? createPaletteColor(alert) : alert,
        info: Utils.isString(info) ? createPaletteColor(info) : info,
        background: Utils.isString(background) ? createBackground(background) : background,
        mention: Utils.isString(mention) ? createPaletteColor(mention) : mention,
        text: text || getDefaultText(),
    };
};

export { createThemePalette, createPaletteColor, getContrastLuminance };
