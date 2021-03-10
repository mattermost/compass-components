import { green, indigo, neutral, purple, red, yellow } from '../colors';

import { TTheme } from './theme.types';

const lightTheme: TTheme = {
    type: 'light',
    palette: {
        primary: {
            main: indigo[700],
        },
        secondary: {
            main: green[500],
        },
        error: {
            main: red[500],
        },
        warning: {
            main: yellow[500],
        },
        success: {
            main: green[500],
        },
        info: {
            main: purple[500],
        },
    },
    text: {
        primary: neutral[700],
        secondary: neutral[500],
        disabled: neutral[200],
    },
    background: neutral[100],
};

export default lightTheme;
