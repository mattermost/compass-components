import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha, blendColors } from '../../shared';

import CheckboxBase from './Checkbox.base';
import PCheckbox from './Checkbox.props';

const getCheckboxVariables = ({
    theme: { palette, action, text },
    hasError = false,
    disabled = false,
    checked = false,
    size,
}: ThemedStyledProps<PRadio, TTheme>): FlattenSimpleInterpolation => {
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

    if (disabled) {
        colors.checked = setAlpha(colors.checked, 0.32);
        colors.text = setAlpha(colors.text, 0.16);
        colors.border = colors.text;
    }

    if (hasError) {
        colors.border = palette.alert.main;
    }

    // @default: `size === 'medium'`
    let labelMargin = 10;

    if (size === 'sm') {
        labelMargin = 8;
    } else if (size === 'lg') {
        labelMargin = 12;
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

        .control {
            border: 1px solid ${colors.border};
            transition: background 0.3s ease;

            i {
                color: ${colors.icon};
                transform: scale(0);
                transition: all 0.3s ease;
            }
        }

        .label {
            margin-left: ${labelMargin}px;
        }
    `;
};

const Checkbox = styled(CheckboxBase)<PCheckbox>`
    ${getCheckboxVariables};
    .input {
        display: none;
    }
`;

export default Checkbox;
