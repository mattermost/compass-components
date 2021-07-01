import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import Spacing, { TSpacingTokensSymmetric } from '../../utilities/spacing';
import { applyPadding } from '../../utilities/layout';
import { applyShape } from '../../foundations/shape';
import { TTheme } from '../../utilities/theme';
import { setAlpha, blendColors, Utils } from '../../shared';

import { BUTTON_ICON_MARGIN_MAP } from './Button.constants';
import { PButtonRoot } from './Button.props';

const ButtonRoot = styled.button.withConfig<PButtonRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})(
    ({
        theme: { palette, action, background },
        size,
        width,
        variant,
        destructive,
        inverted,
        disabled,
    }: ThemedStyledProps<PButtonRoot, TTheme>): FlattenSimpleInterpolation => {
        let height = 40;

        const spacing: TSpacingTokensSymmetric = {
            vertical: 0,
            horizontal: 125,
        };

        switch (size) {
            case 'large':
                height = 48;
                spacing.horizontal = 150;
                break;
            case 'small':
                height = 32;
                spacing.horizontal = 100;
                break;
            case 'medium':
            default:
        }

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
                opacities.background = 0.04;
                opacities.hover = 0.08;
                opacities.active = 0.12;

                colors.text = colors.main;
                colors.action = colors.main;
                break;
            case 'secondary':
                opacities.background = 0;
                opacities.hover = 0.04;
                opacities.active = 0.08;

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
                      background: ${blendColors(
                          colors.background,
                          setAlpha(colors.action, opacities.active)
                      )};
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
            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            ${applyShape({ width: width === 'full' ? '100%' : width, height, radius: 4 })};
            ${applyPadding(Spacing.symmetric(spacing))};

            background-color: ${colors.background};
            color: ${colors.text};
            ${variant === 'secondary' &&
            css`
                box-shadow: inset 0 0 0 1px ${colors.border};
            `}

            ${actionStyles}

        i {
                &:first-child {
                    margin-right: ${BUTTON_ICON_MARGIN_MAP[size]}px;
                }
                &:last-child {
                    margin-left: ${BUTTON_ICON_MARGIN_MAP[size]}px;
                }
            }

            transition-property: box-shadow, background-color, color;
            transition-duration: 150ms;
            transition-timing-function: linear;
        `;
    }
);

export default ButtonRoot;
