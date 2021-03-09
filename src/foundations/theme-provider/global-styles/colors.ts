import { css } from 'styled-components';

import allColors from '../../colors';

const getColorVariables = (color: Record<string, string>, colorName: string): string =>
    Object.keys(color)
        .map(shade => `--default-theme-${colorName}-${shade}: ${color[shade]};`)
        .join('\n');

const colorVariableString = Object.keys(allColors)
    .map(colorName => getColorVariables(allColors[colorName], colorName))
    .join('\n');

const ColorStyles = css`
    ${colorVariableString}
`;

export default ColorStyles;
