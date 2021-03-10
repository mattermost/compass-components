type TThemeColorDefinition = {
    light?: string;
    main: string;
    dark?: string;
};

type TTHemeColors = {
    primary: TThemeColorDefinition;
    secondary: TThemeColorDefinition;
    error: TThemeColorDefinition;
    warning: TThemeColorDefinition;
    success: TThemeColorDefinition;
    info: TThemeColorDefinition;
};

type TTHemeTextColors = {
    primary: string;
    secondary: string;
    disabled: string;
};

type TTheme = {
    type: 'light' | 'dark';
    palette: TTHemeColors;
    text: TTHemeTextColors;
    background: string;
};

export type { TTheme, TTHemeColors };
