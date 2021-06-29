import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyShape } from '../../foundations/shape';
import { setAlpha, blendColors, Utils } from '../../shared';
import { TTheme } from '../../utilities/theme';

import { RADIO_VALUES_MAPPING } from './Radio.constants';
import { PRadioRoot } from './Radio.props';

const RadioRoot = styled.label.withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PRadioRoot>(
    ({
        theme: { palette, action, text },
        hasError,
        disabled,
        checked,
        size,
    }: ThemedStyledProps<PRadioRoot, TTheme>): FlattenSimpleInterpolation => {
        const opacities: Record<string, number> = {
            background: disabled ? 0.08 : 1,
            hover: 0.16,
        };

        const colors: Record<string, string> = {
            checked: hasError ? palette.alert.main : palette.primary.main,
            text: text.primary,
            action: action.hover,
            border: checked ? palette.primary.main : text.secondary,
        };

        if (hasError) {
            colors.border = palette.alert.main;
        }

        if (disabled) {
            colors.checked = setAlpha(colors.checked, 0.32);
            colors.text = setAlpha(colors.text, 0.16);
            colors.border = colors.text;
        }

        const actionStyles = disabled
            ? css`
                  cursor: not-allowed;
              `
            : css`
                  cursor: pointer;
                  &:hover {
                      span {
                          border-color: ${blendColors(
                              colors.border,
                              setAlpha(colors.border, opacities.hover)
                          )};
                          &:after {
                              background: ${blendColors(
                                  colors.checked,
                                  setAlpha(colors.checked, opacities.background)
                              )};
                          }
                      }
                  }
                  &:focus {
                      box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 3px ${colors.checked};
                  }

                  input:checked + span {
                      border-color: ${colors.checked};

                      &:after {
                          transform: scale(1);
                          transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
                      }
                  }
              `;

        return css`
            ${actionStyles}
            color: ${colors.text};
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                display: none;
            }

            span {
                ${applyShape({
                    radius: 'circle',
                    width: RADIO_VALUES_MAPPING[size].radioSize,
                    height: RADIO_VALUES_MAPPING[size].radioSize,
                })};
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid ${colors.border};

                &:after {
                    content: '';
                    width: calc(50% + 1px);
                    height: calc(50% + 1px);
                    border-radius: 100%;
                    background: ${colors.checked};
                    transform: scale(0);
                    transition: all 0.2s ease;
                }
            }
        `;
    }
);

export default RadioRoot;
