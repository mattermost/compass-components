import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../utilities/theme';

import { PHeadingRoot } from './Heading.props';
import { applyHeadingColor, applyHeadingMargin, applyHeadingStyles } from './Heading.mixins';

const HeadingRoot = styled.h6<PHeadingRoot>(
    ({
        theme,
        inheritLineHeight,
        color,
        margin,
        size,
        weight,
    }: ThemedStyledProps<PHeadingRoot, TTheme>): FlattenSimpleInterpolation => css`
        ${applyHeadingStyles({ inheritLineHeight, size, weight })};
        ${applyHeadingColor({ color, theme })};
        ${applyHeadingMargin({ margin, size })};

        // animation
        body.enable-animations & {
            transition: color ${theme.animation.fastest} 0s ease-in-out;
        }
    `
);

export default HeadingRoot;
