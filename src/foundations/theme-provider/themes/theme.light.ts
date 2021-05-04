import { neutral, green, red, blue, indigo, orange } from '../../colors';

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
        hover: neutral[0],
        disabled: neutral[1000],
    },
    text: {
        primary: neutral[1100],
        accent: neutral[900],
        secondary: neutral[800],
        disabled: neutral[500],
        contrast: neutral[0],
    },
    background: {
        default: neutral[50],
        shape: neutral[0],
        contrast: neutral[1100],
    },
};

export default lightTheme;
