import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { Utils } from '../../shared';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import PText from './Text.props';
import {
    DEFAULT_TEXT_MARGIN,
    DEFAULT_TEXT_SIZE,
    DEFAULT_TEXT_ELEMENT,
    DEFAULT_TEXT_WEIGHT,
    DEFAULT_TEXT_COLOR,
} from './Text.constants';
import { applyTextColor, applyTextMargin, applyTextStyles } from './Text.mixins';

const Text = styled.p
    .attrs((props: PText) => ({
        // it is possible to remap props, so we do not need to pass down the
        // `as` property from styled-components and prevent usage of
        // unsupported HTML tags
        as: props.element,
    }))
    .withConfig({
        shouldForwardProp: Utils.forwardProperties(),
    })<PText>(
    ({
        theme,
        inheritLineHeight = false,
        color = DEFAULT_TEXT_COLOR,
        element = DEFAULT_TEXT_ELEMENT,
        margin = DEFAULT_TEXT_MARGIN,
        size = DEFAULT_TEXT_SIZE,
        weight = DEFAULT_TEXT_WEIGHT,
    }: ThemedStyledProps<PText, TTheme>): FlattenSimpleInterpolation => css`
        ${applyTextStyles({ inheritLineHeight, element, size, weight })};
        ${applyTextColor({ color, theme })};
        ${applyTextMargin({ margin, size })};

        body.enable-animations & {
            transition: color var(--animation-speed-shortest) 0s ease-in-out;
        }
    `
);

export default Text;
