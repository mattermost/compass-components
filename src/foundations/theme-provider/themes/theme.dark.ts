import { indigo, green, red, neutral, orange, purple, teal } from '../../colors';

import { TTheme } from './theme.types';

const themeDark: TTheme = {
    type: 'dark',
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700],
        },
        secondary: {
            light: teal[300],
            main: teal[500],
            dark: teal[700],
        },
        alert: {
            light: red[300],
            main: red[500],
            dark: red[700],
        },
        warning: {
            light: orange[200],
            main: orange[400],
            dark: orange[600],
        },
        success: {
            light: green[400],
            main: green[600],
            dark: green[800],
        },
        info: {
            light: indigo[100],
            main: indigo[200],
            dark: indigo[300],
        },
    },
    text: {
        primary: neutral[50],
        secondary: neutral[300],
        disabled: neutral[700],
    },
    background: {
        default: neutral[1100],
        shape: neutral[1000],
    },
};

export default themeDark;
