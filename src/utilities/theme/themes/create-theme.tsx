import { createThemePalette } from './create-theme-palette';
import quartzTheme from './theme.quartz';
import type { TTheme, TCustomThemeColors } from './theme.types';

const createTheme = (
    colors: TCustomThemeColors,
    theme: TTheme = quartzTheme,
    mode: 'light' | 'dark' = 'light'
): TTheme => {
    const palette = createThemePalette(colors, theme.palette);

    return {
        ...theme,
        type: mode,
        palette,
    };
};

export default createTheme;
