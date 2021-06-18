import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../utilities/theme/themes/theme.types';
import { Utils } from '../../shared';

import { PIconRoot } from './Icon.props';
import { DEFAULT_ICON_SIZE, ICON_FONT_SIZES } from './Icon.constants';

function getIconSizes({ size }: PIconRoot): FlattenSimpleInterpolation {
    return css`
        height: ${size}px;
        width: ${size}px;

        &::before {
            font-size: ${ICON_FONT_SIZES[size]}px;
            letter-spacing: ${ICON_FONT_SIZES[size]}px;
        }
    `;
}

const IconRoot = styled.i
    .withConfig({
        shouldForwardProp: Utils.forwardProperties(),
    })
    .attrs((props: PIconRoot) => ({
        className: `icon-${props.glyph}`,
        'aria-label': props.ariaLabel,
    }))<ThemedStyledProps<PIconRoot, TTheme>>(
    ({ theme, color }: ThemedStyledProps<PIconRoot, TTheme>) => css`
        // element container base styles
        position: relative;
        justify-content: center;
        width: 20px;
        height: 20px;
        padding: 0;

        display: inline-flex;
        align-items: center;

        color: inherit;

        // sub elements
        &::before {
            font-size: ${ICON_FONT_SIZES[DEFAULT_ICON_SIZE]}px;
            line-height: 1;
            letter-spacing: ${ICON_FONT_SIZES[DEFAULT_ICON_SIZE]}px;
            margin: 0; // remove margins added by fontello
        }

        ${getIconSizes};

        ${color &&
        color !== 'inherit' &&
        css`
            color: ${theme.palette[color].main};
        `}

        // animation
        body.enable-animations & {
            transition: color ${theme.animation.fastest} 0s ease-in-out;
        }
    `
);

export default IconRoot;
