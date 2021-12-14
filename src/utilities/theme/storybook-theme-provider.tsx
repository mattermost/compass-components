// storybook canvas- & docs-pages style overrides
import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { setAlpha } from '../../shared';

import ThemeProvider from './theme-provider';
import type { PThemeProvider } from './theme-provider';
import { denim } from './themes';
import type { TCustomThemeColors } from './themes';
import type { PGlobalStyles } from './global-styles';

const CanvasGlobalStyles = createGlobalStyle`
    body.sb-show-main.sb-main-centered {
        background-color: ${(props: PGlobalStyles): string => props.theme.background.main};
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
        background-color: ${({ theme }: PGlobalStyles): string => theme.background.main};
        align-items: stretch;

        .sbdocs-wrapper {
            background-color: ${({ theme }: PGlobalStyles): string =>
                theme.type === 'dark' ? 'transparent' : theme.background.main};

            td {
                background-color: ${({ theme }: PGlobalStyles): string =>
                    theme.type === 'dark' ? theme.background.light : '#FFF'};
            }
            
            h1, h2, h3, h4, h5, h6, p, th, td {
                color: ${({ theme }: PGlobalStyles): string => theme.text.primary};
            }
            
            h2 {
                opacity: 0.75;
            
                &:not(.sbdocs-subtitle) {
                    border-bottom: 1px solid ${({ theme }: PGlobalStyles): string =>
                        setAlpha(theme.background.dark, 0.25)};
                }
            }
            
            hr {
                border-top: 1px solid ${({ theme }: PGlobalStyles): string =>
                    setAlpha(theme.background.dark, 0.25)};
            }
        }
    }
`;

const CanvasThemeProvider = ({
    children = null,
    themeColors = denim,
}: PThemeProvider): JSX.Element => {
    const [selectedThemeColors, setSelectedThemeColors] = useState<TCustomThemeColors>(themeColors);

    useEffect(() => {
        setSelectedThemeColors({ ...denim, ...themeColors });
    }, [themeColors]);

    return (
        <ThemeProvider themeColors={selectedThemeColors}>
            <CanvasGlobalStyles />
            {children}
        </ThemeProvider>
    );
};

const DocumentationThemeProvider = ({
    children = null,
    themeColors = denim,
}: PThemeProvider): JSX.Element => {
    const [selectedThemeColors, setSelectedThemeColors] = useState<TCustomThemeColors>(themeColors);

    useEffect(() => {
        setSelectedThemeColors(themeColors);
    }, [themeColors]);

    return (
        <ThemeProvider themeColors={selectedThemeColors}>
            <DocumentationGlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export { CanvasThemeProvider, DocumentationThemeProvider };
