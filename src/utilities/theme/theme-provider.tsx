import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './global-styles';
import { denim } from './themes';
import type { TTheme } from './themes';
import themeGenerator from './themes/theme-creator';

type PThemeProvider = {
    theme?: TTheme;
    children?: React.ReactNode | React.ReactNode[];
};

const ThemeProvider = ({ children = null }: PThemeProvider): JSX.Element => {
    const newTheme = themeGenerator(denim);

    return (
        <StyledThemeProvider theme={newTheme}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    );
};

export type { PThemeProvider };

export { StyledThemeProvider as SectionThemeProvider };

export default ThemeProvider;
