import type { TTheme } from './theme.types';

const quartzTheme: TTheme = {
    type: 'light' as TTheme['type'],
    elevationOpacity: 0.32,
    noStyleReset: false,
    noFontFaces: false,
    noDefaultStyle: false,
    palette: {
        primary: {
            '100': 'hsla(221, 77%, 56%, 1)',
            '200': 'hsla(221, 77%, 52%, 1)',
            '300': 'hsla(221, 77%, 48%, 1)',
            '400': 'hsla(221, 77%, 44%, 1)',
            contrast: 'hsla(221, 77%, 100%, 1)',
        },
        secondary: {
            '100': 'hsla(203, 83%, 64%, 1)',
            '200': 'hsla(203, 83%, 60%, 1)',
            '300': 'hsla(203, 83%, 56%, 1)',
            '400': 'hsla(203, 83%, 52%, 1)',
            contrast: 'hsla(203, 83%, 0%, 1)',
        },
        tertiary: {
            '100': 'hsla(180, 79%, 64%, 1)',
            '200': 'hsla(180, 79%, 60%, 1)',
            '300': 'hsla(180, 79%, 56%, 1)',
            '400': 'hsla(180, 79%, 52%, 1)',
            contrast: 'hsla(180, 79%, 0%, 1)',
        },
        alert: {
            '100': 'hsl(359, 60%, 64%)',
            '200': 'hsl(359, 60%, 60%)',
            '300': 'hsl(359, 60%, 56%)',
            '400': 'hsl(359, 60%, 52%)',
            contrast: 'hsl(359, 60%, 100%)',
        },
        warning: {
            '100': 'hsl(42, 100%, 64%)',
            '200': 'hsl(42, 100%, 60%)',
            '300': 'hsl(42, 100%, 56%)',
            '400': 'hsl(42, 100%, 52%)',
            contrast: 'hsl(42, 100%, 0%)',
        },
        success: {
            '100': 'hsl(156, 50%, 56%)',
            '200': 'hsl(156, 50%, 52%)',
            '300': 'hsl(156, 50%, 48%)',
            '400': 'hsl(156, 50%, 44%)',
            contrast: 'hsl(156, 50%, 0%)',
        },
        info: {
            '100': 'hsl(221, 77%, 72%)',
            '200': 'hsl(221, 77%, 68%)',
            '300': 'hsl(221, 77%, 64%)',
            '400': 'hsl(221, 77%, 60%)',
            contrast: 'hsl(221, 77%, 100%)',
        },
        mention: {
            '100': 'hsla(221, 77%, 56%, 1)',
            '200': 'hsla(221, 77%, 52%, 1)',
            '300': 'hsla(221, 77%, 48%, 1)',
            '400': 'hsla(221, 77%, 44%, 1)',
            contrast: 'hsla(221, 77%, 100%, 1)',
        },
        background: {
            light: 'hsla(0, 0%, 100%, 1)',
            main: 'hsla(0, 0%, 100%, 1)',
            dark: 'hsla(0, 0%, 96%, 1)',
        },
        text: {
            primary: 'hsla(0, 0%, 28%, 1)',
            secondary: 'hsla(0, 0%, 40%, 1)',
            disabled: 'hsla(0, 0%, 52%, 1)',
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

export default quartzTheme;
