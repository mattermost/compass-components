import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import { Utils } from '../../shared';
import type { TTheme } from '../../utilities/theme';

import type { PHeadingRoot } from './Heading.props';
import { applyHeadingColor, applyHeadingMargin, applyHeadingStyles } from './Heading.mixins';

const HeadingRoot = styled.h6.withConfig<PHeadingRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})((props: ThemedStyledProps<PHeadingRoot, TTheme>): FlattenSimpleInterpolation => {
    const { theme, inheritLineHeight, color, margin, size, weight } = props;

    return css`
        ${applyHeadingStyles({ inheritLineHeight, size, weight })};
        ${applyHeadingColor({ color, theme })};
        ${applyHeadingMargin({ margin, size })};

        // animation
        body.enable-animations & {
            transition: color ${theme.animation.fastest} 0s ease-in-out;
        }
    `;
});

export default HeadingRoot;
