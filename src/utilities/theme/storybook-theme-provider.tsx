// storybook canvas- & docs-pages style overrides
import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import ThemeProvider, { PThemeProvider } from './theme-provider';
import { lightTheme, TTheme } from './themes';
import { PGlobalStyles } from './global-styles';

const CanvasGlobalStyles = createGlobalStyle`
    body.sb-show-main.sb-main-centered {
        background-color: ${(props: PGlobalStyles): string => props.theme.background.default};
        align-items: stretch;

        #root {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

// storybook canvas- & docs-pages style overrides
const DocumentationGlobalStyles = createGlobalStyle`
    body.sb-show-main {
        background-color: ${(props: PGlobalStyles): string => props.theme.background.default};
        align-items: stretch;

        .sbdocs-wrapper {
            background-color: ${(props: PGlobalStyles): string =>
                props.theme.type === 'dark' ? 'transparent' : props.theme.background.default};

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
            <CanvasGlobalStyles />
            {children}
        </ThemeProvider>
    );
};

const DocumentationThemeProvider = ({
    children = null,
    theme = lightTheme,
}: PThemeProvider): JSX.Element => {
    const [selectedTheme, setSelectedTheme] = useState<TTheme>(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [theme]);

    return (
        <ThemeProvider theme={selectedTheme}>
            <DocumentationGlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export { CanvasThemeProvider, DocumentationThemeProvider };
