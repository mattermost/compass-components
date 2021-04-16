import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { alpha, blendColors, SharedUtils } from '../../shared';

import ButtonBase from './Button.base';
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from './Button.constants';
import { PButton } from './Button.props';

const getButtonVariables = ({
    theme: { palette, action, text },
    onClick,
    disabled = false,
    destructive = false,
    size = DEFAULT_BUTTON_SIZE,
    variant = DEFAULT_BUTTON_VARIANT,
}: ThemedStyledProps<PButton, TTheme>): FlattenSimpleInterpolation => {
    let mainColor = destructive ? palette.alert.main : palette.primary.main;
    let hoverColor = action.hover;
    let bgOpacity = disabled ? 0.08 : 1;

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

    if (disabled || !SharedUtils.isFunction(onClick)) {
        mainColor = action.disabled;
        // texts, icons and borders are slightly opaque with disabled buttons
        textColor = alpha(mainColor, 0.32);
        borderColor = textColor;
    }

    // @default: `size === 'medium'`
    let iconMargin = 7;

    if (size === 'small') {
        iconMargin = 5;
    } else if (size === 'large') {
        iconMargin = 8;
    }

    const buttonBg = alpha(mainColor, bgOpacity);

    const actionStyles = disabled
        ? null
        : css`
              &:hover {
                  background: ${disabled
                      ? buttonBg
                      : blendColors(buttonBg, alpha(hoverColor, action.hoverOpacity))};
              }
              &:active {
                  background: ${disabled
                      ? buttonBg
                      : blendColors(buttonBg, alpha(hoverColor, action.activeOpacity))};
              }
              &:focus {
                  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 2px ${borderColor};
              }
          `;

    return css`
        background: ${buttonBg};
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

const Button = styled(ButtonBase)<PButton>`
    line-height: 16px;

    // define local variables
    ${getButtonVariables};

    transition: all 500ms 0s ease-in-out;
`;

export default Button;
