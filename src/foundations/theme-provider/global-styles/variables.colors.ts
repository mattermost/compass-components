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

const VColors = css`
    --border-color: ${getTextColor('secondary')};
    --shape-background-color: ${getBackgroundColor('shape')};
    --default-background-color: ${getBackgroundColor('default')};

    --primary-text-color: ${getTextColor('primary')};
    --secondary-text-color: ${getTextColor('secondary')};
    --disabled-text-color: ${getTextColor('disabled')};

    --default-border-color: ${getTextColor('disabled')};

    --primary-color-light: ${getThemeColor('primary', 'light')};
    --primary-color-main: ${getThemeColor('primary', 'main')};
    --primary-color-dark: ${getThemeColor('primary', 'dark')};
`;

export default VColors;
