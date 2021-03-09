import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { TTheme } from './theme.types';
import GlobalStyle from './global-styles/globalStyles';
import lightTheme from './light-theme';

type PThemeProvider = {
    theme?: TTheme;
    children?: React.ReactNode | React.ReactNode[];
};

const ThemeProvider = ({ children = null, theme = lightTheme }: PThemeProvider): JSX.Element => (
    <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </StyledThemeProvider>
);

export default ThemeProvider;
