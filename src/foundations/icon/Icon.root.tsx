import styled, { css } from 'styled-components';
import type { ThemedStyledProps } from 'styled-components';

import type { TTheme } from '../../utilities/theme';

import type { PIconRoot } from './Icon.props';
import { DEFAULT_ICON_SIZE } from './Icon.constants';

const IconRoot = styled.div<ThemedStyledProps<PIconRoot, TTheme>>(
    (props: ThemedStyledProps<PIconRoot, TTheme>) => {
        const { theme, color, size = DEFAULT_ICON_SIZE } = props;

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
                color: ${theme.palette[color].main};

                svg {
                    fill: currentColor;
                }
            `}
        `;
    }
);

export default IconRoot;
