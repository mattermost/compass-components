import { neutral, green, red, blue, indigo, orange } from '../../colors';

import { TTheme } from './theme.types';

const lightTheme: TTheme = {
    type: 'light',
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
        },
        secondary: {
            light: indigo[300],
            main: indigo[500],
            dark: indigo[700],
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
        primary: neutral[900],
        secondary: neutral[600],
        disabled: neutral[300],
    },
    background: {
        default: neutral[50],
        shape: neutral[0],
    },
};

export default lightTheme;
