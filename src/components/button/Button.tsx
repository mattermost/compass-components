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
    variant,
    disabled,
    destructive,
}: ThemedStyledProps<PButton, TTheme>): FlattenSimpleInterpolation => {
    let mainColor = palette.primary.main;
    let hoverColor = action.hover;
    let bgOpacity = 1;

    let textColor = text.contrast;

    switch (true) {
        case disabled:
            // immediately return interpolated css for disabled buttons with disabled theme color
            return css`
                --button-bg: ${action.disabled};
                --button-bg-hover: ${action.disabled};
                --button-bg-active: ${action.disabled};

                --button-text-color: ${textColor};
            `;
        case destructive:
            mainColor = palette.alert.main;
            break;
        case variant === 'primary':
            mainColor = palette.primary.main;
            break;
        case variant === 'secondary' || variant === 'tertiary':
        default:
            // for variants `secondary` and `tertiary` use the
            // primary color, but set alpha to `0`
            bgOpacity = 0;
            // hoverColor is set to the primary button color
            hoverColor = mainColor;
            textColor = mainColor;
    }

    const buttonBg = alpha(mainColor, bgOpacity);
    const buttonBgHover = blendColors(buttonBg, alpha(hoverColor, action.hoverOpacity));
    const buttonBgActive = blendColors(buttonBg, alpha(hoverColor, action.activeOpacity));

    return css`
        --button-bg-color: ${buttonBg};
        --button-bg-color-hover: ${buttonBgHover};
        --button-bg-color-active: ${buttonBgActive};

        --button-text-color: ${textColor};

        --button-border-color: ${mainColor};
    `;
};

const Button = styled(ButtonBase).attrs(handleProperties)<PButton>`
    // define local variables
    ${getButtonVariables};

    --button-icon-margin: 7px;

    &[data-size='small'] {
        --button-icon-margin: 5px;
    }

    &[data-size='large'] {
        --button-icon-margin: 8px;
    }

    background: var(--button-bg-color);
    color: var(--button-text-color);
    box-shadow: inset 0 0 0 1px var(--button-border-color);

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
