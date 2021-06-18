import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../utilities/theme';

import { PTextRoot } from './Text.props';
import { applyTextColor, applyTextMargin, applyTextStyles } from './Text.mixins';

const TextRoot = styled.p<PTextRoot>(
    ({
        theme,
        inheritLineHeight,
        color,
        margin,
        size,
        weight,
    }: ThemedStyledProps<PTextRoot, TTheme>): FlattenSimpleInterpolation => css`
        ${applyTextStyles({ inheritLineHeight, size, weight })};
        ${applyTextColor({ color, theme })};
        ${applyTextMargin({ margin, size })};

        body.enable-animations & {
            transition: color ${theme.animation.fastest} 0s ease-in-out;
        }
    `
);

export default TextRoot;
