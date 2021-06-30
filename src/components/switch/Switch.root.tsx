import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyTextMargin, applyTextStyles } from '../text';
import { applyShape } from '../../foundations/shape';
import { setAlpha, blendColors, Utils } from '../../shared';
import { TTheme } from '../../utilities/theme';

import { PSwitchRoot } from './Switch.props';
import { SWITCH_VALUES_MAPPING } from './Switch.constants';

const SwitchRoot = styled.label.withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PSwitchRoot>(
    ({
        theme,
        disabled,
        size,
        onClick,
    }: ThemedStyledProps<PSwitchRoot, TTheme>): FlattenSimpleInterpolation => {
        const isDisabled = disabled || !Utils.isFunction(onClick);

        const opacities: Record<string, number> = {
            background: disabled ? 0.08 : 1,
            hover: 0.16,
        };

        const mainColor = isDisabled ? theme.text.disabled : theme.text.secondary;
        const toggledColor = theme.palette.primary.main;
        const hoverColor = theme.action.hover;
        const focusColor = theme.palette.primary.light;
        const textColor = theme.text.primary;

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
                              setAlpha(toggledColor, opacities.background)
                          )};
                      }
                  }
              `
            : css`
                  &:hover {
                      .container {
                          background: ${blendColors(
                              mainColor,
                              setAlpha(hoverColor, opacities.hover)
                          )};
                          border-color: ${blendColors(
                              mainColor,
                              setAlpha(hoverColor, opacities.hover)
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
            ${actionStyles};
            color: ${textColor};
            display: flex;
            justify-content: center;
            align-items: center;

            .input {
                display: none;
            }

            .container {
                ${applyShape({
                    radius: 'pill',
                    width: SWITCH_VALUES_MAPPING[size].width,
                    height: SWITCH_VALUES_MAPPING[size].height,
                })};
                border: 2px solid ${mainColor};
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: ${mainColor};
                position: relative;
                transition: background 0.2s ease, border-color 0.2s ease;
            }

            .toggle {
                ${applyShape({
                    radius: 'circle',
                    width: SWITCH_VALUES_MAPPING[size].innerWidth,
                    height: SWITCH_VALUES_MAPPING[size].innerWidth,
                })};
                background: white;
                transition: transform 0.2s ease-in;
            }

            .label {
                ${applyTextStyles({
                    inheritLineHeight: true,
                    size: SWITCH_VALUES_MAPPING[size].labelSize,
                })};
                ${applyTextMargin({ margin: 'none' })};
                margin-left: ${labelMargin}px;
            }
        `;
    }
);

export default SwitchRoot;
