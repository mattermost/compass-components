import styled, { css } from 'styled-components';
import type { ThemedStyledProps } from 'styled-components';

import type { TTheme } from '../../utilities/theme';
import { Utils } from '../../shared';

import type { PIconRoot } from './Icon.props';
import { DEFAULT_ICON_SIZE, ICON_FONT_SIZES } from './Icon.constants';

const IconRoot = styled.i.withConfig<PIconRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, ['size', 'color']) && validator(property),
})<ThemedStyledProps<PIconRoot, TTheme>>((props: ThemedStyledProps<PIconRoot, TTheme>) => {
    const { theme, color, size } = props;

    return css`
        // element container base styles
        position: relative;
        justify-content: center;

        height: ${size}px;
        width: ${size}px;

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

        &::before {
            font-size: ${ICON_FONT_SIZES[size]}px;
            letter-spacing: ${ICON_FONT_SIZES[size]}px;
        }

        ${color &&
        color !== 'inherit' &&
        css`
            color: ${theme.palette[color].main};
        `}

        // animation
          body.enable-animations & {
            transition: color ${theme.animation.fastest} 0s ease-in-out;
        }
    `;
});

export default IconRoot;
