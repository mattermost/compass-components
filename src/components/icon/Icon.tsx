import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { SharedUtils } from '../../shared';

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
        className: `icon-${props.glyph || DEFAULT_ICON_GLYPH}`,
        'aria-label': props.ariaLabel,
        'data-size': props.size || DEFAULT_ICON_SIZE,
        'data-glyph': props.glyph || DEFAULT_ICON_GLYPH,
        'data-color': props.color || 'inherit',
    }))
    .withConfig({
        shouldForwardProp: SharedUtils.forwardProperties(),
    })<PIcon>`
    // define local variables using global variables and fallbacks
    --color-foreground: var(--icon-color-foreground, var(--primary-color-dark, black));
    --animation-speed: var(--animation-speed-shortest, 0.1s);
    
    &[data-color='inherit'] {
        --color-foreground: inherit;
    }

    // element container base styles
    align-items: center;
    color: var(--color-foreground);
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
        transition: color var(--animation-speed) 0s ease-in-out;
    }
`;

export default Icon;
