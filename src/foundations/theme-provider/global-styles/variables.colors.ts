import { css } from 'styled-components';

import { TTheme, TTHemeBackgroundColors, TTHemeTextColors } from '../themes/theme.types';

type PGlobalStyles = {
    theme: TTheme;
};

const getTextColor = (type: keyof TTHemeTextColors) => (props: PGlobalStyles): string =>
    props.theme.text[type];

const getBackgroundColor = (type: keyof TTHemeBackgroundColors) => (props: PGlobalStyles): string =>
    props.theme.background[type];

const VColors = css`
    --border-color: ${getTextColor('secondary')};
    --shape-background-color: ${getBackgroundColor('shape')};
    --default-background-color: ${getBackgroundColor('default')};
`;

export default VColors;
