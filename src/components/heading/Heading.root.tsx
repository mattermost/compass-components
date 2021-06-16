import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { Utils } from '../../shared';

import { PHeadingRoot } from './Heading.props';
import { applyHeadingColor, applyHeadingMargin, applyHeadingStyles } from './Heading.mixins';

const HeadingRoot = styled.h6.withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PHeadingRoot>(
    ({
        theme,
        inheritLineHeight,
        color,
        element,
        margin,
        size,
        weight,
    }: ThemedStyledProps<PHeadingRoot, TTheme>): FlattenSimpleInterpolation => css`
        ${applyHeadingStyles({ inheritLineHeight, element, size, weight })};
        ${applyHeadingColor({ color, theme })};
        ${applyHeadingMargin({ margin, size })};

        // animation
        body.enable-animations & {
            transition: color ${theme.animation.fastest} 0s ease-in-out;
        }
    `
);

export default HeadingRoot;
