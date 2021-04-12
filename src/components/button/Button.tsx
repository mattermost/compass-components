import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { alpha, blendColors } from '../../utils';

import ButtonBase from './Button.base';
import {
    DEFAULT_BUTTON_SIZE,
    DEFAULT_BUTTON_VARIANT,
    DEFAULT_BUTTON_WIDTH,
} from './Button.constants';
import { PButton } from './Button.props';

const handleProperties = ({
    disabled = false,
    variant = DEFAULT_BUTTON_VARIANT,
    size = DEFAULT_BUTTON_SIZE,
    width = DEFAULT_BUTTON_WIDTH,
    ...rest
}: PButton): PButton => {
    const baseProperties: PButton = {
        size,
        width,
        variant,
        ...rest,
    };

    if (disabled) {
        baseProperties.disabled = disabled;
    }

    return baseProperties;
};

const getButtonVariables = ({
    theme: { palette, action, text },
    size,
    variant,
    disabled,
    destructive,
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

    if (disabled) {
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

    return css`
        --button-bg-color: ${buttonBg};
        --button-bg-color-hover: ${blendColors(buttonBg, alpha(hoverColor, action.hoverOpacity))};
        --button-bg-color-active: ${blendColors(buttonBg, alpha(hoverColor, action.activeOpacity))};

        --button-text-color: ${textColor};
        --button-border-color: ${borderColor};

        ${variant === 'secondary' && 'box-shadow: inset 0 0 0 1px var(--button-border-color);'}

        --button-icon-margin: ${iconMargin}px;
    `;
};

const Button = styled(ButtonBase).attrs(handleProperties)<PButton>`
    // define local variables
    ${getButtonVariables};

    // set default background
    background: var(--button-bg-color);
    // set default text-color
    color: var(--button-text-color);

    line-height: 16px;

    &:not([disabled]) {
        &:hover {
            background-color: var(--button-bg-color-hover);
        }

        &:active {
            background-color: var(--button-bg-color-active);
        }

        &:focus {
            box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                inset 0 0 0 2px var(--button-border-color);
        }
    }

    i {
        &:first-child {
            margin-right: var(--button-icon-margin);
        }
        &:last-child {
            margin-left: var(--button-icon-margin);
        }
    }

    transition: all 500ms 0s ease-in-out;
`;

export default Button;
