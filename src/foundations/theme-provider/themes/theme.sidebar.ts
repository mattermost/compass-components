import { blue, indigo, green, red, neutral, orange, teal } from '../../colors';

import { TTheme } from './theme.types';

const sidebarTheme: TTheme = {
    type: 'dark',
    elevationOpacity: 0.32,
    palette: {
        primary: {
            lighter: green[100],
            light: green[200],
            main: green[400],
            dark: green[600],
            darker: green[700],
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
    text: {
        primary: neutral[50],
        accent: neutral[150],
        secondary: neutral[300],
        disabled: neutral[700],
        contrast: neutral[100],
    },
    background: {
        default: blue[700],
        shape: blue[500],
        contrast: neutral[50],
    },
};

export default sidebarTheme;
