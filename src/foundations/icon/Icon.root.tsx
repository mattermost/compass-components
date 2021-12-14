import styled, { css } from 'styled-components';
import type { ThemedStyledProps } from 'styled-components';

import type { TTheme } from '../../utilities/theme';

import type { PIcon } from './Icon';

type PIconRoot = Required<Pick<PIcon, 'size' | 'color'>>;

const IconRoot = styled.div<PIconRoot>((props: ThemedStyledProps<PIconRoot, TTheme>) => {
    const { theme, color, size } = props;

    return css`
        position: relative;
        justify-content: center;
        align-items: center;

        height: ${size}px;
        width: ${size}px;

        padding: 0;

        display: inline-flex;
        color: inherit;

        ${color &&
        color !== 'inherit' &&
        css`
            color: ${theme.palette[color][300]};

            svg {
                fill: currentColor;
            }
        `}
    `;
});

export default IconRoot;
