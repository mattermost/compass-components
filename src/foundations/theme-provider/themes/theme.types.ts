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

type TTHemeTextColors = {
    primary: string;
    secondary: string;
    disabled: string;
    contrast: string;
};

type TTHemeBackgroundColors = {
    default: string;
    shape: string;
};

type TTheme = {
    type: 'light' | 'dark';
    palette: TTHemeColors;
    text: TTHemeTextColors;
    background: TTHemeBackgroundColors;
};

export type {
    TTheme,
    TTHemeColors,
    TTHemeTextColors,
    TTHemeBackgroundColors,
    TThemeColorDefinition,
};
