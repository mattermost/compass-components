import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './global-styles';
import { denim } from './themes';
import type { TCustomThemeColors } from './themes';
import createTheme from './themes/create-theme';

type PThemeProvider = {
    themeColors?: TCustomThemeColors;
    children?: React.ReactNode | React.ReactNode[];
};

const ThemeProvider = ({ themeColors = denim, children = null }: PThemeProvider): JSX.Element => {
    const theme = createTheme(themeColors);

    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    );
};

export type { PThemeProvider };

export { StyledThemeProvider as SectionThemeProvider };

export default ThemeProvider;
