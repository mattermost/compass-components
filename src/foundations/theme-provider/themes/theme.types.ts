import { TStatusBadgeStatus } from '../../../components/status-badge/StatusBadge.types';

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

type TTHemeBackgroundColors = {
    default: string;
    badge: string;
    shape: string;
    skeleton: string;
    shimmer: string;
    contrast: string;
};

type TThemeBadges = {
    [key in TStatusBadgeStatus]: string;
};

type TTheme = {
    type: 'light' | 'dark';
    elevationOpacity: number;
    palette: TTHemeColors;
    badges: TThemeBadges;
    action: TTHemeActionColors;
    text: TTHemeTextColors;
    background: TTHemeBackgroundColors;
};

export type {
    TTheme,
    TTHemeColors,
    TTHemeActionColors,
    TTHemeTextColors,
    TTHemeBackgroundColors,
    TThemeColorDefinition,
};
