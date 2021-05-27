import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { Utils } from '../../shared';

import PHeading from './Heading.props';
import {
    DEFAULT_HEADING_ELEMENT,
    DEFAULT_HEADING_MARGIN,
    DEFAULT_HEADING_SIZE,
    DEFAULT_HEADING_COLOR,
    DEFAULT_HEADING_WEIGHT,
} from './Heading.constants';
import { applyHeadingColor, applyHeadingMargin, applyHeadingStyles } from './Heading.mixins';

const Heading = styled.h6
    .attrs((props: PHeading) => ({
        // it is possible to remap props, so we do not need to pass down the
        // `as` property from styled-components and prevent usage of
        // unsupported HTML tags
        as: props.element,
    }))
    .withConfig({
        shouldForwardProp: Utils.forwardProperties(),
    })<PHeading>(
    ({
        theme,
        inheritLineHeight = false,
        color = DEFAULT_HEADING_COLOR,
        element = DEFAULT_HEADING_ELEMENT,
        margin = DEFAULT_HEADING_MARGIN,
        size = DEFAULT_HEADING_SIZE,
        weight = DEFAULT_HEADING_WEIGHT,
    }: ThemedStyledProps<PHeading, TTheme>): FlattenSimpleInterpolation => css`
        ${applyHeadingStyles({ inheritLineHeight, element, size, weight })};
        ${applyHeadingColor({ color, theme })};
        ${applyHeadingMargin({ margin, size })};

        // animation
        body.enable-animations & {
            transition: color var(--animation-speed-shortest) 0s ease-in-out;
        }
    `
);

export default Heading;
