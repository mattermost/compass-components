import { TStatusBadgeStatus } from '../../../components/status-badge';

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
    [key in TThemeAnimationSpeed]: string;
};

type TTheme = {
    type: 'light' | 'dark';
    noStyleReset: boolean;
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

export type {
    TTheme,
    TTHemeColors,
    TTHemeActionColors,
    TTHemeTextColors,
    TThemeBorderColors,
    TTHemeBackgroundColors,
    TThemeColorDefinition,
    TThemeAnimationSpeed,
};
