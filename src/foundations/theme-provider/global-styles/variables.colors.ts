import { css } from 'styled-components';

import {
    TTHemeBackgroundColors,
    TThemeColorDefinition,
    TTHemeColors,
    TTHemeTextColors,
} from '../themes/theme.types';

import { PGlobalStyles } from './globalStyles';

const getThemeColor = (colorToken: keyof TTHemeColors, colorShade: keyof TThemeColorDefinition) => (
    props: PGlobalStyles
): string => props.theme.palette[colorToken][colorShade] || props.theme.palette[colorToken].main;

const getTextColor = (type: keyof TTHemeTextColors) => (props: PGlobalStyles): string =>
    props.theme.text[type];

const getBackgroundColor = (type: keyof TTHemeBackgroundColors) => (props: PGlobalStyles): string =>
    props.theme.background[type];

const getAccentColor = (type: keyof TThemeColorDefinition) => (
    props: PGlobalStyles
): string | undefined => props.theme.palette.primary[type];

const VColors = css`
    --border-color: ${getTextColor('secondary')};
    --shape-background-color: ${getBackgroundColor('shape')};
    --default-background-color: ${getBackgroundColor('default')};

    --primary-text-color: ${getTextColor('primary')};
    --secondary-text-color: ${getTextColor('secondary')};
    --disabled-text-color: ${getTextColor('disabled')};
    --contrast-text-color: ${getTextColor('contrast')};
    --accent-text-color: ${getAccentColor('main')};

    --default-border-color: ${getTextColor('disabled')};

    --primary-color-light: ${getThemeColor('primary', 'light')};
    --primary-color-main: ${getThemeColor('primary', 'main')};
    --primary-color-dark: ${getThemeColor('primary', 'dark')};

    --secondary-color-light: ${getThemeColor('secondary', 'light')};
    --secondary-color-main: ${getThemeColor('secondary', 'main')};
    --secondary-color-dark: ${getThemeColor('secondary', 'dark')};

    --alert-color-light: ${getThemeColor('alert', 'light')};
    --alert-color-main: ${getThemeColor('alert', 'main')};
    --alert-color-dark: ${getThemeColor('alert', 'dark')};

    --warning-color-light: ${getThemeColor('warning', 'light')};
    --warning-color-main: ${getThemeColor('warning', 'main')};
    --warning-color-dark: ${getThemeColor('warning', 'dark')};

    --success-color-light: ${getThemeColor('success', 'light')};
    --success-color-main: ${getThemeColor('success', 'main')};
    --success-color-dark: ${getThemeColor('success', 'dark')};

    --info-color-light: ${getThemeColor('info', 'light')};
    --info-color-main: ${getThemeColor('info', 'main')};
    --info-color-dark: ${getThemeColor('info', 'dark')};
`;

export default VColors;
