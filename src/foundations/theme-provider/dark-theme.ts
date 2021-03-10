import { indigo, green, red, neutral, yellow, purple } from '../colors';

import { TTheme } from './theme.types';

const darkTheme: TTheme = {
    type: 'dark',
    palette: {
        primary: {
            main: indigo[200],
        },
        secondary: {
            main: green[200],
        },
        error: {
            main: red[200],
        },
        warning: {
            main: yellow[200],
        },
        success: {
            main: green[200],
        },
        info: {
            main: purple[200],
        },
    },
    text: {
        primary: neutral[200],
        secondary: neutral[400],
        disabled: neutral[700],
    },
    background: neutral[900],
};

export default darkTheme;
