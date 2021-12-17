import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import Icon from '../../foundations/icon';
import Spacing, { applyPadding } from '../../utilities/spacing';
import { applyShape } from '../../foundations/shape';
import type { TTheme } from '../../utilities/theme';
import { resetButton } from '../../utilities/theme/global-styles/reset-styles';
import { setAlpha, Utils } from '../../shared';
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
})((props: ThemedStyledProps<PButtonRoot, TTheme>): FlattenSimpleInterpolation => {
    const {
        theme: {
            palette: { primary, secondary, alert, text },
            animation,
            noStyleReset,
        },
        size,
        width,
        variant,
        active,
        destructive,
        disabled,
    } = props;

    const { height, spacing, labelSize } = BUTTON_SIZE_MAP[size];
    const isActive = active && !disabled;

    const mainColor = destructive ? alert : primary;

    const colors: Record<string, string> = {
        normal: mainColor[200],
        hover: mainColor[300],
        active: mainColor[400],
        border: mainColor[300],
        text: mainColor.contrast,
    };

    switch (variant) {
        case 'tertiary':
            colors.normal = setAlpha(mainColor[300], 0.08);
            colors.hover = setAlpha(mainColor[300], 0.12);
            colors.active = setAlpha(mainColor[300], 0.16);
            colors.text = mainColor[300];
            break;
        case 'secondary':
            colors.normal = setAlpha(mainColor[300], 0);
            colors.hover = setAlpha(mainColor[300], 0.08);
            colors.active = setAlpha(mainColor[300], 0.16);
            colors.text = mainColor[300];
            break;
        case 'primary':
        default:
            break;
    }

    if (disabled) {
        colors.normal = setAlpha(text.primary, variant === 'secondary' ? 0 : 0.12);
        colors.text = setAlpha(text.primary, 0.32);
    }

    const borderThickness = variant === 'secondary' ? 1 : 0;

    // disabled buttons do not have interactional states
    const actionStyles = disabled
        ? css`
              cursor: not-allowed;
          `
        : css`
              &:hover {
                  background: ${colors.hover};
              }
              &:active {
                  background: ${colors.active};
              }
              &:focus {
                  box-shadow: inset 0 0 0 2px ${destructive ? alert[100] : secondary[300]};
              }
              &:focus:not(:focus-visible) {
                  box-shadow: inset 0 0 0 ${borderThickness}px ${colors.text};
              }
              &:focus-visible {
                  box-shadow: inset 0 0 0 2px ${destructive ? alert[100] : secondary[300]};
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

        background-color: ${colors.normal};
        color: ${colors.text};

        box-shadow: inset 0 0 0 ${borderThickness}px ${colors.text};

        ${actionStyles};

        ${isActive &&
        css`
            background: ${colors.active};
        `}

        transition-property: box-shadow, background-color, color;
        transition-duration: ${animation.fast}ms;
        transition-timing-function: linear;
    `;
});

export { ButtonIconRoot };

export default ButtonRoot;
