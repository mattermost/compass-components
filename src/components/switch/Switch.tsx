import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { blendColors, setAlpha } from '../../shared';

import SwitchBase from './Switch.base';
import { PSwitch } from './Switch.props';

const getSwitchVariables = ({
    theme: { palette, action, text },
    hasError,
    disabled,
}: ThemedStyledProps<PSwitch, TTheme>): FlattenSimpleInterpolation => {
    const mainColor = hasError ? palette.alert.main : palette.primary.main;
    const hoverColor = action.hover;
    const textColor = text.primary;

    const actionStyles = disabled
        ? css`
              input {
                  cursor: not-allowed;
                  opacity: 0.9;
                  &:checked {
                      background: ${blendColors(
                          mainColor,
                          setAlpha(hoverColor, action.disabledOpacity)
                      )};
                  }
                  & + label {
                      cursor: not-allowed;
                  }
              }
          `
        : css`
              &:hover {
                  .label:after {
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
        --switch-checked-color: ${mainColor};
    `;
};

const Switch = styled(SwitchBase)<PSwitch>`
    ${getSwitchVariables};

    &--checkbox {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    &--background {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        background: var(--var-background-color);
        position: relative;
        transition: background-color 0.2s;
    }

    &--background,
    &--button {
        content: '';
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }

    &--checkbox:checked + &--background &--button {
        background: var(--switch-checked-color);
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }

    &--background:active &--button {
        width: 30px;
    }

    &--label {
        margin-left: 12px;
    }
`;

export default Switch;
