import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import Icon from '../../foundations/icon';
import Spacing, { applyPadding } from '../../utilities/spacing';
import { applyShape } from '../../foundations/shape';
import { TTheme } from '../../utilities/theme';
import { resetButton } from '../../utilities/theme/global-styles/reset-styles';
import { setAlpha, blendColors, Utils } from '../../shared';
import { applyTextMargin, applyTextStyles } from '../text';

import { BUTTON_SIZE_MAP } from './Button.constants';
import { PButtonIconRoot, PButtonRoot } from './Button.props';

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
        Utils.blockProperty(property, ['width']) && validator(property),
})(
    ({
        theme: { palette, action, background, noStyleReset },
        size,
        width,
        variant,
        active,
        destructive,
        inverted,
        disabled,
    }: ThemedStyledProps<PButtonRoot, TTheme>): FlattenSimpleInterpolation => {
        const { height, spacing, labelSize } = BUTTON_SIZE_MAP[size];
        const isInverted = inverted && !destructive;

        // get default opacities for 'primary' or 'inverted primnary' buttons
        const opacities: Record<string, number> = {
            background: disabled ? 0.08 : 1,
            hover: isInverted ? 0.08 : 0.16,
            active: isInverted ? 0.16 : 0.32,
        };

        const colors: Record<string, string> = {
            main: destructive ? palette.alert.main : palette.primary.main,
            text: destructive ? palette.alert.contrast : palette.primary.contrast,
            action: action.hover,
            // border will be set afterwards, since it is influenced by other props
            border: '',
            background: '',
        };

        // handle inverted here before re-assigning colors
        if (inverted && !destructive) {
            colors.main = background.contrast;
        }

        colors.border = colors.main;

        switch (variant) {
            case 'tertiary':
                opacities.background = isInverted ? 0.12 : 0.08;
                opacities.hover = isInverted ? 0.16 : 0.12;
                opacities.active = isInverted ? 0.24 : 0.16;

                colors.text = colors.main;
                colors.action = colors.main;
                break;
            case 'secondary':
                opacities.background = 0;
                opacities.hover = 0.08;
                opacities.active = 0.16;

                colors.text = colors.main;
                colors.action = colors.main;
                break;
            case 'primary':
            default:
                // 'inverted primary' buttons have different colors for text and actions
                if (isInverted) {
                    colors.text = palette.primary.main;
                    colors.action = palette.primary.main;
                }
        }

        // override some values for disabled buttons
        if (disabled) {
            // set all colors to the 'disabled'-grey
            colors.main = action.disabled;
            // texts, icons and borders are slightly opaque with disabled buttons
            colors.text = setAlpha(colors.main, 0.32);
            colors.border = colors.text;
        }

        colors.background = setAlpha(colors.main, opacities.background);

        const activeStyles = css`
            background: ${blendColors(
                colors.background,
                setAlpha(colors.action, opacities.active)
            )};
        `;

        // disabled buttons do not have interactional states
        const actionStyles = disabled
            ? css`
                  cursor: not-allowed;
              `
            : css`
                  &:hover {
                      background: ${blendColors(
                          colors.background,
                          setAlpha(colors.action, opacities.hover)
                      )};
                  }
                  &:active {
                      ${activeStyles};
                  }
                  &:focus {
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 2px ${colors.border};
                  }
                  &:focus:not(:focus-visible) {
                      box-shadow: ${variant === 'secondary'
                          ? `inset 0 0 0 1px ${colors.border}`
                          : 'none'};
                  }
                  &:focus-visible {
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 2px ${colors.border};
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

            background-color: ${colors.background};
            color: ${colors.text};

            ${variant === 'secondary' &&
            css`
                box-shadow: inset 0 0 0 1px ${colors.border};
            `};

            ${actionStyles};

            ${active && activeStyles}

            transition-property: box-shadow, background-color, color;
            transition-duration: 150ms;
            transition-timing-function: linear;
        `;
    }
);

export { ButtonIconRoot };

export default ButtonRoot;
