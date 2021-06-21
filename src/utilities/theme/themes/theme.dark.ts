import { setAlpha } from '../../../shared';
import { indigo, green, red, neutral, orange, purple, teal } from '../../../foundations/colors';

import { TTheme } from './theme.types';

const darkTheme: TTheme = {
    type: 'dark',
    elevationOpacity: 0.32,
    palette: {
        primary: {
            lighter: purple[200],
            light: purple[300],
            main: purple[500],
            dark: purple[700],
            darker: purple[800],
            contrast: neutral[0],
        },
        secondary: {
            lighter: teal[200],
            light: teal[300],
            main: teal[500],
            dark: teal[700],
            darker: teal[800],
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
        hover: neutral[0],
        disabled: neutral[100],
    },
    badges: {
        online: green[600],
        away: orange[400],
        dnd: red[500],
        offline: setAlpha(neutral[350], 0.64),
    },
    text: {
        accent: neutral[150],
        primary: neutral[50],
        secondary: neutral[300],
        disabled: neutral[700],
        contrast: neutral[100],
    },
    border: {
        accent: neutral[150],
        primary: neutral[50],
        secondary: neutral[300],
        disabled: neutral[700],
        contrast: neutral[100],
    },
    background: {
        badge: neutral[1250],
        default: neutral[1100],
        shape: neutral[1000],
        skeleton: neutral[900],
        shimmer: neutral[800],
        contrast: neutral[50],
    },
    animation: {
        fastest: '100ms',
        fast: '250ms',
        normal: '300ms',
        slow: '450ms',
        slowest: '600ms',
    },
    highlight: {
        mention: red[200],
    },
};

export default darkTheme;
