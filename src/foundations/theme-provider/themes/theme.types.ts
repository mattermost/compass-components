import { TStatusBadgeStatus } from '../../../components/status-badge/StatusBadge.types';

type TThemeColorDefinition = {
    light?: string;
    main: string;
    dark?: string;
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
    hoverOpacity: number;
    active: string;
    activeOpacity: number;
    focus: string;
    focusOpacity: number;
    selected: string;
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
    shimmer: string;
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
