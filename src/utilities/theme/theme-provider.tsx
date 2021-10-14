import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './global-styles';
import { lightTheme } from './themes';
import type { TTheme } from './themes';

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

export type { PThemeProvider };

export { StyledThemeProvider as SectionThemeProvider };

export default ThemeProvider;
