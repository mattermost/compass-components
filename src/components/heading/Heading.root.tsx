import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import type { TTheme } from '../../utilities/theme';

import type { PHeadingRoot } from './Heading.props';
import { applyHeadingColor, applyHeadingMargin, applyHeadingStyles } from './Heading.mixins';

const HeadingRoot = styled.h6<PHeadingRoot>(
    (props: ThemedStyledProps<PHeadingRoot, TTheme>): FlattenSimpleInterpolation => {
        const { theme, inheritLineHeight, color, margin, size, weight } = props;

        return css`
            ${applyHeadingStyles({ inheritLineHeight, size, weight })};
            ${applyHeadingColor({ color, theme })};
            ${applyHeadingMargin({ margin, size })};

            color: ${color};

            // animation
            body.enable-animations & {
                transition: color ${theme.animation.fastest} 0s ease-in-out;
            }
        `;
    }
);

export default HeadingRoot;
