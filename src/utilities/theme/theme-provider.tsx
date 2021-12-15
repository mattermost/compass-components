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

const ThemeProvider = (props: PThemeProvider): JSX.Element => {
    const { themeColors = denim, children = null } = props;
    const theme = createTheme(themeColors);

    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    );
};

const SectionThemeProvider = (props: PThemeProvider): JSX.Element => {
    const { themeColors = denim, children = null } = props;
    const theme = createTheme(themeColors);

    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export type { PThemeProvider };

export { SectionThemeProvider };

export default ThemeProvider;
