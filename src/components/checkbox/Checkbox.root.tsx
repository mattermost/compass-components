import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyTextMargin, applyTextStyles } from '../text';
import { applyShape } from '../../foundations/shape';
import { setAlpha, blendColors, Utils } from '../../shared';
import { TTheme } from '../../utilities/theme';

import { CHECKBOX_VALUES_MAPPING } from './Checkbox.constants';
import { PCheckboxRoot } from './Checkbox.props';

const CheckboxRoot = styled.label.withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PCheckboxRoot>(
    ({
        theme: { palette, action, text },
        hasError,
        disabled,
        checked,
        size,
    }: ThemedStyledProps<PCheckboxRoot, TTheme>): FlattenSimpleInterpolation => {
        const opacities: Record<string, number> = {
            hover: 0.16,
        };

        const colors: Record<string, string> = {
            checked: hasError ? palette.alert.main : palette.primary.main,
            text: text.primary,
            action: action.hover,
            icon: text.contrast,
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

        // @default: `size === 'medium'`
        let labelMargin = '10';

        if (size === 'sm') {
            labelMargin = '8';
        } else if (size === 'lg') {
            labelMargin = '12';
        }

        const actionStyles = disabled
            ? css`
                  cursor: not-allowed;
              `
            : css`
                  cursor: pointer;
                  .control:hover {
                      border-color: ${blendColors(
                          colors.border,
                          setAlpha(colors.border, opacities.hover)
                      )};
                  }
                  &:focus {
                      box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 3px ${colors.checked};
                  }

                  .input:checked + .control {
                      border-color: ${colors.checked};
                      background: ${colors.checked};

                      i {
                          transform: scale(1);
                      }
                  }
              `;

        return css`
            ${actionStyles}
            color: ${colors.text};
            display: flex;
            justify-content: center;
            align-items: center;

            .input {
                display: none;
            }

            .control {
                ${applyShape({
                    radius: 2,
                    width: CHECKBOX_VALUES_MAPPING[size].checkboxSize,
                    height: CHECKBOX_VALUES_MAPPING[size].checkboxSize,
                })};
                display: flex;
                align-items: center;
                border: 1px solid ${colors.border};
                transition: background 0.3s ease;

                i {
                    color: ${colors.icon};
                    transform: scale(0);
                    transition: all 0.3s ease;
                }
            }

            .label {
                ${applyTextStyles({
                    inheritLineHeight: true,
                    size: CHECKBOX_VALUES_MAPPING[size].labelSize,
                })};
                ${applyTextMargin({ margin: 'none' })};
                margin-left: ${labelMargin}px;
            }
        `;
    }
);

export default CheckboxRoot;
