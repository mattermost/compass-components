import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle, { PGlobalStyles } from './global-styles/globalStyles';
import lightTheme from './themes/theme.light';
import { TTheme } from './themes/theme.types';

type PThemeProvider = {
    theme?: TTheme;
    children?: React.ReactNode | React.ReactNode[];
};

// storybook canvas- & docs-pages style overrides
const SBGlobalStyles = createGlobalStyle`
  body.sb-show-main {
    background-color: ${(props: PGlobalStyles): string => props.theme.background.default};

    .sbdocs-wrapper {
      background-color: ${(props: PGlobalStyles): string =>
          props.theme.type === 'dark' ? 'transparent' : '#FFF'};
      
      td {
        background-color: ${(props: PGlobalStyles): string =>
            props.theme.type === 'dark' ? props.theme.background.shape : '#FFF'};
      }

      h1, h2, h3, h4, h5, h6, p, th, td {
        color: ${(props: PGlobalStyles): string => props.theme.text.primary};
      }

      h2 {
        opacity: 0.75;

        &:not(.sbdocs-subtitle) {
          border-bottom: 1px solid rgba(255,255,255,0.75);
        }
      }
      
      hr {
        border-top: 1px solid rgba(255,255,255,0.75);
      }
    }
  }
`;

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

    return (
        <ThemeProvider theme={selectedTheme}>
            <SBGlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export { CanvasThemeProvider };

export default ThemeProvider;
