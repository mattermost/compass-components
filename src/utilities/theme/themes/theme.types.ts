import type { TStatusBadgeStatus } from '../../../components/status-badge';

type TThemeColorDefinition = {
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    contrast: string;
};

type TTHemeColors = {
    primary: TThemeColorDefinition;
    secondary: TThemeColorDefinition;
    alert: TThemeColorDefinition;
    warning: TThemeColorDefinition;
    success: TThemeColorDefinition;
    info: TThemeColorDefinition;
};

type TTHemeActionColors = {
    hover: string;
    disabled: string;
};

type TTHemeTextColors = {
    primary: string;
    secondary: string;
    disabled: string;
    contrast: string;
    accent: string;
};

type TThemeBorderColors = {
    primary: string;
    secondary: string;
    disabled: string;
    contrast: string;
    accent: string;
};

type TTHemeBackgroundColors = {
    default: string;
    badge: string;
    shape: string;
    skeleton: string;
    shimmer: string;
    contrast: string;
};

type TThemeHighlightColors = {
    mention: string;
};

type TThemeBadges = {
    [key in TStatusBadgeStatus]: string;
};

type TThemeAnimationSpeed = 'instant' | 'fastest' | 'fast' | 'normal' | 'slow' | 'slowest';

type TThemeAnimations = {
    [key in TThemeAnimationSpeed]: number;
};

type TTheme = {
    type: 'light' | 'dark';
    noStyleReset: boolean;
    noFontFaces: boolean;
    noDefaultStyle: boolean;
    elevationOpacity: number;
    palette: TTHemeColors;
    badges: TThemeBadges;
    action: TTHemeActionColors;
    text: TTHemeTextColors;
    border: TThemeBorderColors;
    background: TTHemeBackgroundColors;
    animation: TThemeAnimations;
    highlight: TThemeHighlightColors;
};

type TCustomThemeColors = {
    navigation: string;
    content: string;
    mention: string;
    primary: string;
    secondary: string;
    tertiary: string;
};

type TColorOpacities =
    | 'a00'
    | 'a04'
    | 'a08'
    | 'a12'
    | 'a16'
    | 'a20'
    | 'a24'
    | 'a28'
    | 'a32'
    | 'a36'
    | 'a40'
    | 'a44'
    | 'a48'
    | 'a52'
    | 'a56'
    | 'a60'
    | 'a64'
    | 'a68'
    | 'a72';

type TColorShades = '0' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700';

type TNewColorDefinition = {
    [k in TColorOpacities | TColorShades]: string;
};

type TNewThemeColor = TNewColorDefinition & { contrast: TNewColorDefinition };

type TNewTheme = TTheme & {
    palettes: {
        navigation: TNewThemeColor;
        content: TNewThemeColor;
        mention: TNewThemeColor;
        primary: TNewThemeColor;
        secondary: TNewThemeColor;
        tertiary: TNewThemeColor;
        alert: TNewThemeColor;
        warning: TNewThemeColor;
        success: TNewThemeColor;
        info: TNewThemeColor;
    };
};

export type {
    TTheme,
    TTHemeColors,
    TTHemeActionColors,
    TTHemeTextColors,
    TThemeBorderColors,
    TTHemeBackgroundColors,
    TThemeColorDefinition,
    TThemeAnimationSpeed,
    TCustomThemeColors,
    TNewTheme,
    TNewThemeColor,
    TNewColorDefinition,
    TColorOpacities,
    TColorShades,
};
