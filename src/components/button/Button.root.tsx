import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import Icon from '../../foundations/icon';
import Spacing, { applyPadding } from '../../utilities/spacing';
import { applyShape } from '../../foundations/shape';
import type { TColorOpacities, TColorShades, TNewTheme } from '../../utilities/theme';
import { resetButton } from '../../utilities/theme/global-styles/reset-styles';
import { Utils } from '../../shared';
import { applyTextMargin, applyTextStyles } from '../text';

import { BUTTON_SIZE_MAP } from './Button.constants';
import type { PButtonIconRoot, PButtonRoot } from './Button.props';

const ButtonIconRoot = styled(Icon).withConfig<PButtonIconRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.forceForwardProperty(property, ['glyph', 'size']) ||
        (Utils.blockProperty(property, ['width']) && validator(property)),
})(
    ({ margin, marginPosition }) => css`
              margin-${marginPosition}: ${margin}px;
          `
);

const ButtonRoot = styled.button.withConfig<PButtonRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, ['width', 'disabled']) && validator(property),
})((props: ThemedStyledProps<PButtonRoot, TNewTheme>): FlattenSimpleInterpolation => {
    const {
        theme: {
            palettes: { navigation, primary, content, secondary, alert },
            noStyleReset,
        },
        size,
        width,
        variant,
        active,
        destructive,
        inverted,
        disabled,
    } = props;

    const { height, spacing, labelSize } = BUTTON_SIZE_MAP[size];
    const isInverted = inverted && !destructive;
    const isActive = active && !disabled;

    let color = isInverted ? navigation.contrast : primary;
    let text = isInverted ? navigation : primary.contrast;

    const focusBorder = destructive ? alert['0'] : secondary['300'];

    const shades: Record<string, TColorShades | TColorOpacities> = {
        background: '300',
        hover: '400',
        active: '500',
        text: disabled ? 'a32' : '300',
    };

    // handle destructive here
    if (destructive) {
        color = alert;
        text = alert.contrast;
    }

    switch (variant) {
        case 'tertiary':
            shades.background = isInverted ? 'a12' : 'a08';
            shades.hover = isInverted ? 'a16' : 'a12';
            shades.active = isInverted ? 'a24' : 'a16';

            text = color;
            break;
        case 'secondary':
            shades.background = 'a00';
            shades.hover = 'a08';
            shades.active = 'a16';

            text = color;
            break;
        case 'primary':
        default:
    }

    // override values for disabled buttons
    if (disabled) {
        color = isInverted ? navigation.contrast : content.contrast;
        text = color;
        shades.background = variant === 'secondary' ? 'a00' : 'a12';
    }

    const borderStyles: FlattenSimpleInterpolation | null =
        variant === 'secondary'
            ? css`
                  box-shadow: inset 0 0 0 1px ${color[shades.text]};
              `
            : css`
                  box-shadow: none;
              `;

    const activeStyles = css`
        background: ${color[shades.active]};
    `;

    // disabled buttons do not have interactional states
    const actionStyles = disabled
        ? css`
              cursor: not-allowed;
          `
        : css`
              &:hover {
                  background: ${color[shades.hover]};
              }
              &:active {
                  ${activeStyles};
              }
              &:focus {
                  box-shadow: inset 0 0 0 2px ${focusBorder};
              }
              &:focus:not(:focus-visible) {
                  ${borderStyles}
              }
              &:focus-visible {
                  box-shadow: inset 0 0 0 2px ${focusBorder};
              }
          `;

    return css`
        ${noStyleReset && resetButton}

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        ${applyShape({ width: width === 'full' ? '100%' : width, height, radius: 4 })};
        ${applyPadding(Spacing.symmetric(spacing))};

        ${applyTextStyles({ inheritLineHeight: true, size: labelSize, weight: 'bold' })};
        ${applyTextMargin({ margin: 'none' })};

        background-color: ${color[shades.background]};
        color: ${text[shades.text]};

        ${borderStyles};

        ${actionStyles};

        ${isActive && activeStyles}

        transition-property: box-shadow, background-color, color;
        transition-duration: 150ms;
        transition-timing-function: linear;
    `;
});

export { ButtonIconRoot };

export default ButtonRoot;
