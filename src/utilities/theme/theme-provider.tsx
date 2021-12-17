import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './global-styles';
import { denimTheme } from './themes';
import type { TTheme } from './themes';

// eslint-disable-next-line import/no-unassigned-import
import '../../assets/fonts/fonts.css';

type PThemeProvider = {
    theme?: TTheme;
    children?: React.ReactNode | React.ReactNode[];
};

const ThemeProvider = (props: PThemeProvider): JSX.Element => {
    const { theme = denimTheme, children = null } = props;

    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    );
};

const SectionThemeProvider = (props: PThemeProvider): JSX.Element => {
    const { theme = denimTheme, children = null } = props;

    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export type { PThemeProvider };

export { SectionThemeProvider };

export default ThemeProvider;
