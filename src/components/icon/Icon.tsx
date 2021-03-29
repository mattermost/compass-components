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

function generateIconSizingStyles(iconSize: TIconSize): FlattenSimpleInterpolation {
    return css`
        &[data-size='${iconSize}'] {
            --size: ${iconSize}px;
            --font-size: ${ICON_FONT_SIZES[iconSize]}px;
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
    // define component colors
    --color-foreground: var(--icon-color-foreground, var(--primary-color-dark, black));
    
    // set component variable defaults
    --size: 20px;
    --font-size: ${ICON_FONT_SIZES[DEFAULT_ICON_SIZE]}px;
    --animation-speed: var(--animation-speed-shortest, 0.1s);

    // element container base styles
    align-items: center;
    color: var(--color-foreground);
    display: inline-flex;
    height: var(--size);
    justify-content: center;
    position: relative;
    padding: 0;
    width: var(--size);

    // sub elements
    &::before {
        font-size: var(--font-size);
        line-height: 1;
        letter-spacing: var(--font-size);
        margin: 0; // remove margins added by fontello
    }

    // define sizes
    ${ICON_SIZES.map((iconSize) => generateIconSizingStyles(iconSize))}

    // animation
    body.enable-animations & {
        transition: color var(--animation-speed) 0s ease-in-out;
    }
`;

export default Icon;
