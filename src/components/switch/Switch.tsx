import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { blendColors, setAlpha, Utils } from '../../shared';

import SwitchBase from './Switch.base';
import { PSwitch } from './Switch.props';

const getSwitchVariables = ({
    theme: { palette, action, text },
    disabled,
    size,
    onClick,
}: ThemedStyledProps<PSwitch, TTheme>): FlattenSimpleInterpolation => {
    const isDisabled = disabled || !Utils.isFunction(onClick);

    const mainColor = isDisabled ? text.disabled : text.secondary;
    const toggledColor = palette.primary.main;
    const hoverColor = action.hover;
    const focusColor = palette.primary.light;
    const textColor = text.primary;

    // @default: `size === 'medium'`
    let labelMargin = 10;

    if (size === 'sm') {
        labelMargin = 8;
    } else if (size === 'lg') {
        labelMargin = 12;
    }

    const actionStyles = disabled
        ? css`
              .container,
              .label {
                  cursor: not-allowed;
                  opacity: 0.5;
                  &:checked ~ .background {
                      background: ${blendColors(
                          mainColor,
                          setAlpha(toggledColor, action.disabledOpacity)
                      )};
                  }
              }
          `
        : css`
              &:hover {
                  .container {
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
              .container {
                  cursor: pointer;
              }
              .input:focus-visible {
                  .container {
                      outline-color: transparent;
                      border-color: ${focusColor};
                  }
              }
              .input:checked ~ .container {
                  background: ${toggledColor};
                  border-color: ${toggledColor};
              }

              .input:checked ~ .container .toggle {
                  transform: translateX(80%);
              }
          `;

    return css`
        ${actionStyles}
        color: ${textColor};

        .input {
            display: none;
        }

        .container {
            border: 2px solid ${mainColor};
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: ${mainColor};
            position: relative;
            transition: background 0.2s ease, border-color 0.2s ease;
        }

        .toggle {
            background: white;
            transition: transform 0.2s ease-in;
        }

        .label {
            margin-left: ${labelMargin}px;
        }
    `;
};

const Switch = styled(SwitchBase)<PSwitch>(getSwitchVariables);

export default Switch;
