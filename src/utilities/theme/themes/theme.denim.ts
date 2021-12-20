import type { TTheme } from './theme.types';

const denimTheme: TTheme = {
    type: 'dark',
    elevationOpacity: 0.32,
    noStyleReset: false,
    noFontFaces: false,
    noDefaultStyle: false,
    palette: {
        primary: {
            light: 'hsla(0, 0%, 100%, 1)',
            main: 'hsla(0, 0%, 100%, 1)',
            dark: 'hsla(0, 0%, 100%, 1)',
            darker: 'hsla(0, 0%, 96%, 1)',
            contrast: 'hsla(0, 0%, 28%, 1)',
        },
        secondary: {
            light: 'hsla(221, 77%, 72%, 1)',
            main: 'hsla(221, 77%, 68%, 1)',
            dark: 'hsla(221, 77%, 64%, 1)',
            darker: 'hsla(221, 77%, 60%, 1)',
            contrast: 'hsla(221, 77%, 100%, 1)',
        },
        tertiary: {
            light: 'hsla(42, 100%, 56%, 1)',
            main: 'hsla(42, 100%, 52%, 1)',
            dark: 'hsla(42, 100%, 48%, 1)',
            darker: 'hsla(42, 100%, 44%, 1)',
            contrast: 'hsla(42, 100%, 0%, 1)',
        },
        alert: {
            light: 'hsl(359, 60%, 64%)',
            main: 'hsl(359, 60%, 60%)',
            dark: 'hsl(359, 60%, 56%)',
            darker: 'hsl(359, 60%, 52%)',
            contrast: 'hsl(359, 60%, 100%)',
        },
        warning: {
            light: 'hsl(42, 100%, 64%)',
            main: 'hsl(42, 100%, 60%)',
            dark: 'hsl(42, 100%, 56%)',
            darker: 'hsl(42, 100%, 52%)',
            contrast: 'hsl(42, 100%, 0%)',
        },
        success: {
            light: 'hsl(156, 50%, 56%)',
            main: 'hsl(156, 50%, 52%)',
            dark: 'hsl(156, 50%, 48%)',
            darker: 'hsl(156, 50%, 44%)',
            contrast: 'hsl(156, 50%, 0%)',
        },
        info: {
            light: 'hsl(221, 77%, 72%)',
            main: 'hsl(221, 77%, 68%)',
            dark: 'hsl(221, 77%, 64%)',
            darker: 'hsl(221, 77%, 60%)',
            contrast: 'hsl(221, 77%, 100%)',
        },
        mention: {
            light: 'hsla(0, 0%, 100%, 1)',
            main: 'hsla(0, 0%, 100%, 1)',
            dark: 'hsla(0, 0%, 100%, 1)',
            darker: 'hsla(0, 0%, 96%, 1)',
            contrast: 'hsla(0, 0%, 28%, 1)',
        },
        background: {
            light: 'hsla(221, 51%, 27.04%, 1)',
            main: 'hsla(221, 51%, 24%, 1)',
            dark: 'hsla(221, 51%, 23.04%, 1)',
        },
        text: {
            primary: 'hsla(221, 51%, 96%, 1)',
            secondary: 'hsla(221, 51%, 84%, 1)',
            disabled: 'hsla(221, 51%, 72%, 1)',
        },
    },
    badges: {
        online: 'rgb(51, 153, 112)',
        away: 'rgb(236, 137, 50)',
        dnd: 'rgb(196, 49, 51)',
        offline: 'rgba(175, 179, 192, 0.64)',
    },
    animation: {
        instant: 0,
        fastest: 100,
        fast: 250,
        normal: 300,
        slow: 450,
        slowest: 600,
    },
};

export default denimTheme;
