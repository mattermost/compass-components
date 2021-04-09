import { css } from 'styled-components';

import {
    TTHemeActionColors,
    TTHemeBackgroundColors,
    TThemeColorDefinition,
    TTHemeColors,
    TTHemeTextColors,
} from '../themes/theme.types';

import { PGlobalStyles } from './globalStyles';

const getPaletteColor = (
    colorToken: keyof TTHemeColors,
    colorShade: keyof TThemeColorDefinition
) => (props: PGlobalStyles): string =>
    props.theme.palette[colorToken][colorShade] || props.theme.palette[colorToken].main;

const getActionColor = (colorToken: keyof TTHemeActionColors) => (
    props: PGlobalStyles
): string | number => props.theme.action[colorToken];

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

    --primary-color-light: ${getPaletteColor('primary', 'light')};
    --primary-color-main: ${getPaletteColor('primary', 'main')};
    --primary-color-dark: ${getPaletteColor('primary', 'dark')};

    --secondary-color-light: ${getPaletteColor('secondary', 'light')};
    --secondary-color-main: ${getPaletteColor('secondary', 'main')};
    --secondary-color-dark: ${getPaletteColor('secondary', 'dark')};

    --alert-color-light: ${getPaletteColor('alert', 'light')};
    --alert-color-main: ${getPaletteColor('alert', 'main')};
    --alert-color-dark: ${getPaletteColor('alert', 'dark')};

    --warning-color-light: ${getPaletteColor('warning', 'light')};
    --warning-color-main: ${getPaletteColor('warning', 'main')};
    --warning-color-dark: ${getPaletteColor('warning', 'dark')};

    --success-color-light: ${getPaletteColor('success', 'light')};
    --success-color-main: ${getPaletteColor('success', 'main')};
    --success-color-dark: ${getPaletteColor('success', 'dark')};

    --info-color-light: ${getPaletteColor('info', 'light')};
    --info-color-main: ${getPaletteColor('info', 'main')};
    --info-color-dark: ${getPaletteColor('info', 'dark')};

    --action-color-hover: ${getActionColor('hover')};
    --action-color-hoverOpacity: ${getActionColor('hoverOpacity')};
    --action-color-active: ${getActionColor('active')};
    --action-color-activeOpacity: ${getActionColor('activeOpacity')};
    --action-color-focus: ${getActionColor('focus')};
    --action-color-focusOpacity: ${getActionColor('focusOpacity')};
    --action-color-selected: ${getActionColor('selected')};
    --action-color-disabled: ${getActionColor('disabled')};
`;

export default VColors;
