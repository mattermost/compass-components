import type { TStatusBadgeStatus } from '../../../components/status-badge';

type TTHemeTextColors = {
    primary: string;
    secondary: string;
    disabled?: string;
};

type TTHemeBackgroundColors = {
    light: string;
    main: string;
    dark: string;
};

type TThemeBadges = {
    [key in TStatusBadgeStatus]: string;
};

type TThemeAnimationSpeed = 'instant' | 'fastest' | 'fast' | 'normal' | 'slow' | 'slowest';

type TThemeAnimations = {
    [key in TThemeAnimationSpeed]: number;
};

type TCustomThemeColors = {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    background?: string;
    mention?: string;
};

type TColorShades = '0' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700';

type TColorDefinition = {
    [k in TColorShades]: string;
};

type TThemeColor = TColorDefinition & { contrast: TColorDefinition };

type TTheme = {
    type: 'light' | 'dark';
    noStyleReset: boolean;
    noFontFaces: boolean;
    noDefaultStyle: boolean;
    elevationOpacity: number;
    badges: TThemeBadges;
    animation: TThemeAnimations;
    palette: {
        primary: TThemeColor;
        secondary: TThemeColor;
        tertiary: TThemeColor;
        alert: TThemeColor;
        warning: TThemeColor;
        success: TThemeColor;
        info: TThemeColor;
    };
    background: TTHemeBackgroundColors;
    text: TTHemeTextColors;
    mention: TThemeColor;
};

export type {
    TTheme,
    TThemeColor,
    TTHemeTextColors,
    TTHemeBackgroundColors,
    TThemeAnimationSpeed,
    TCustomThemeColors,
    TColorShades,
};
