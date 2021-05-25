import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { Spacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import { applyPadding } from '../../foundations/layout/Grid.mixins';
import { applyShape } from '../../foundations/shape/Shape.mixins';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha, blendColors, Utils } from '../../shared';

import ButtonBase from './Button.base';
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from './Button.constants';
import { PButton } from './Button.props';

const getButtonStyles = ({
    theme: { palette, action, text },
    onClick,
    disabled = false,
    destructive = false,
    size = DEFAULT_BUTTON_SIZE,
    variant = DEFAULT_BUTTON_VARIANT,
}: ThemedStyledProps<PButton, TTheme>): FlattenSimpleInterpolation => {
    const isDisabled = disabled || !Utils.isFunction(onClick);

    let mainColor = destructive ? palette.alert.main : palette.primary.main;
    let hoverColor = action.hover;
    let bgOpacity = isDisabled ? 0.08 : 1;

    let textColor = text.contrast;
    let borderColor = mainColor;

    if (variant !== 'primary') {
        // for variants `secondary` and `tertiary` use the
        // primary color, but set alpha to `0`
        bgOpacity = 0;
        // hoverColor is set to the primary button color
        // for non-`primary` buttons
        hoverColor = mainColor;
        textColor = mainColor;
    }

    if (isDisabled) {
        mainColor = action.disabled;
        // texts, icons and borders are slightly opaque with disabled buttons
        textColor = setAlpha(mainColor, 0.32);
        borderColor = textColor;
    }

    // @default: `size === 'medium'`
    let iconMargin = 7;

    if (size === 'small') {
        iconMargin = 5;
    } else if (size === 'large') {
        iconMargin = 8;
    }

    const buttonBg = setAlpha(mainColor, bgOpacity);

    const actionStyles = disabled
        ? null
        : css`
              &:hover {
                  background: ${disabled
                      ? buttonBg
                      : blendColors(buttonBg, setAlpha(hoverColor, action.hoverOpacity))};
              }
              &:active {
                  background: ${disabled
                      ? buttonBg
                      : blendColors(buttonBg, setAlpha(hoverColor, action.activeOpacity))};
              }
              &:focus {
                  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 2px ${borderColor};
              }
              &:focus:not(:focus-visible) {
                  box-shadow: ${variant === 'secondary'
                      ? `inset 0 0 0 1px ${borderColor};`
                      : 'none'};
              }
              &:focus-visible {
                  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 2px ${borderColor};
              }
          `;

    return css`
        background-color: ${buttonBg};
        color: ${textColor};
        ${variant === 'secondary' && `box-shadow: inset 0 0 0 1px ${borderColor};`}

        ${actionStyles}

        i {
            &:first-child {
                margin-right: ${iconMargin}px;
            }
            &:last-child {
                margin-left: ${iconMargin}px;
            }
        }
    `;
};

const Button = styled(ButtonBase)<PButton>(
    ({ size, width }: ThemedStyledProps<PButton, TTheme>) => {
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

        return css`
            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            ${applyShape({ width: width === 'full' ? '100%' : width, height, radius: 4 })};
            ${applyPadding(Spacing.symmetric(spacing))};

            // define local variables
            ${getButtonStyles};

            transition-property: box-shadow, background-color, color;
            transition-duration: 150ms;
            transition-timing-function: linear;
        `;
    }
);

export default Button;
