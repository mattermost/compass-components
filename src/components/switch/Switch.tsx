import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { blendColors, setAlpha, Utils } from '../../shared';

import SwitchBase from './Switch.base';
import { PSwitch } from './Switch.props';

const getSwitchVariables = ({
    theme: { palette, action, text },
    disabled,
    onClick,
}: ThemedStyledProps<PSwitch, TTheme>): FlattenSimpleInterpolation => {
    const isDisabled = disabled || !Utils.isFunction(onClick);

    const mainColor = isDisabled ? text.disabled : text.secondary;
    const toggledColor = palette.primary.main;
    const hoverColor = action.hover;
    const textColor = text.primary;

    const actionStyles = disabled
        ? css`
              &--input,
              &--label {
                  cursor: not-allowed;
                  opacity: 0.5;
                  &:checked ~ &--background {
                      background: ${blendColors(
                          mainColor,
                          setAlpha(toggledColor, action.disabledOpacity)
                      )};
                  }
              }
          `
        : css`
              &:hover {
                  &--background {
                      background: ${blendColors(
                          mainColor,
                          setAlpha(hoverColor, action.hoverOpacity)
                      )};
                      border-color: ${blendColors(
                          mainColor,
                          setAlpha(hoverColor, action.hoverOpacity)
                      )};
                  }
              }
              &:focus {
                  box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 3px ${mainColor};
              }
          `;

    return css`
        ${actionStyles}
        --var-background-color: ${mainColor};
        color: ${textColor};
        --switch-checked-color: ${toggledColor};
    `;
};

const Switch = styled(SwitchBase)<PSwitch>`
    ${getSwitchVariables};

    &--input {
    }

    &--container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        background: var(--var-background-color);
        position: relative;
        transition: background-color 0.2s;
    }

    &--toggle {
        background: white;
    }

    &--input:checked ~ &--container {
        background: var(--switch-checked-color);
    }

    &--input:checked ~ &--container &--toggle {
        right: calc(100% - 2px);
        transform: translateX(100%);
    }

    &--label {
        margin-left: 12px;
    }
`;

export default Switch;
