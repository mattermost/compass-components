import clsx from 'clsx';
import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { Utils } from '../../utils';

import { PIcon } from './Icon.props';
import { TIconSize } from './Icon.types';
import {
    DEFAULT_ICON_GLYPH,
    DEFAULT_ICON_SIZE,
    ICON_FONT_SIZES,
    ICON_SIZES,
} from './Icon.constants';

function generateIconFontSizes(iconSize: TIconSize): FlattenSimpleInterpolation {
    return css`
        &[data-size='${iconSize}'] {
            height: ${iconSize}px;
            width: ${iconSize}px;

            &::before {
                font-size: ${ICON_FONT_SIZES[iconSize]}px;
                letter-spacing: ${ICON_FONT_SIZES[iconSize]}px;
            }
        }
    `;
}

const Icon = styled.i
    .attrs((props: PIcon) => ({
        className: clsx(props.className, `icon-${props.glyph || DEFAULT_ICON_GLYPH}`),
        'aria-label': props.ariaLabel,
        'data-size': props.size || DEFAULT_ICON_SIZE,
        'data-glyph': props.glyph || DEFAULT_ICON_GLYPH,
    }))
    .withConfig({
        shouldForwardProp: Utils.forwardProperties(),
    })<PIcon>`
    // define local variables using global variables and fallbacks
    --speed-shortest: var(--animation-speed-shortest, 0.1s);

    // element container base styles
    align-items: center;
    display: inline-flex;
    height: 20px;
    justify-content: center;
    position: relative;
    padding: 0;
    width: 20px;

    // sub elements
    &::before {
        font-size: ${ICON_FONT_SIZES[DEFAULT_ICON_SIZE]}px;
        line-height: 1;
        letter-spacing: ${ICON_FONT_SIZES[DEFAULT_ICON_SIZE]}px;
        margin: 0; // remove margins added by fontello
    }

    // define sizes
    ${ICON_SIZES.map((iconSize) => generateIconFontSizes(iconSize))}

    // animation
    body.enable-animations & {
        transition: color var(--speed-shortest) 0s ease-in-out;
    }
`;

export default Icon;
