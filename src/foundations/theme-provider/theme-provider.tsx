import React, { useEffect, useState } from 'react';
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

const CanvasThemeProvider = ({
    children = null,
    theme = lightTheme,
}: PThemeProvider): JSX.Element => {
    const [selectedTheme, setSelectedTheme] = useState<TTheme>(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [theme]);

    const bodyElement = document.querySelector('body');

    bodyElement!.style.backgroundColor = theme.background;

    return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export { CanvasThemeProvider };

export default ThemeProvider;
