import { setAlpha } from '../../../shared';
import { neutral, green, red, blue, indigo, orange } from '../../../foundations/colors';

import { TTheme } from './theme.types';

const lightTheme: TTheme = {
    type: 'light',
    elevationOpacity: 0.08,
    palette: {
        primary: {
            lighter: blue[300],
            light: blue[400],
            main: blue[500],
            dark: blue[600],
            darker: blue[700],
            contrast: neutral[0],
        },
        secondary: {
            lighter: indigo[300],
            light: indigo[400],
            main: indigo[500],
            dark: indigo[600],
            darker: indigo[700],
            contrast: neutral[0],
        },
        alert: {
            lighter: red[200],
            light: red[300],
            main: red[500],
            dark: red[700],
            darker: red[800],
            contrast: neutral[0],
        },
        warning: {
            lighter: orange[100],
            light: orange[200],
            main: orange[400],
            dark: orange[600],
            darker: orange[700],
            contrast: neutral[0],
        },
        success: {
            lighter: green[300],
            light: green[400],
            main: green[600],
            dark: green[700],
            darker: green[800],
            contrast: neutral[0],
        },
        info: {
            lighter: indigo[100],
            light: indigo[200],
            main: indigo[300],
            dark: indigo[500],
            darker: indigo[600],
            contrast: neutral[0],
        },
    },
    action: {
        hover: neutral[900],
        disabled: neutral[1000],
    },
    badges: {
        online: green[600],
        away: orange[400],
        dnd: red[500],
        offline: setAlpha(neutral[350], 0.64),
    },
    text: {
        primary: neutral[1100],
        accent: neutral[900],
        secondary: neutral[800],
        disabled: neutral[500],
        contrast: neutral[0],
    },
    border: {
        primary: neutral[1100],
        accent: neutral[900],
        secondary: neutral[800],
        disabled: neutral[500],
        contrast: neutral[0],
    },
    background: {
        badge: neutral[500],
        default: neutral[50],
        shape: neutral[0],
        skeleton: neutral[100],
        shimmer: neutral[0],
        contrast: neutral[1100],
    },
    animation: {
        fastest: '100ms',
        fast: '250ms',
        normal: '300ms',
        slow: '450ms',
        slowest: '600ms',
    },
};

export default lightTheme;
