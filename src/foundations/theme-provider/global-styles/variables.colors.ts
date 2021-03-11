import { css } from 'styled-components';

import { TTHemeBackgroundColors, TTHemeTextColors } from '../themes/theme.types';

import { PGlobalStyles } from './globalStyles';

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
`;

export default VColors;
