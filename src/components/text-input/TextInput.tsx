import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha } from '../../shared';

import TextInputBase from './TextInput.base';
import { PTextInput } from './TextInput.props';

const getTextInputVariables = ({
    theme: { palette, action, text },
    hasError = false,
    disabled = false,
    active = false,
}: ThemedStyledProps<PTextInput, TTheme>): FlattenSimpleInterpolation => {
    const colors: Record<string, string> = {
        active: hasError ? palette.alert.main : palette.primary.main,
        text: text.primary,
        action: action.hover,
        border: active ? palette.primary.main : text.secondary,
    };

    if (disabled) {
        colors.active = setAlpha(colors.active, 0.32);
        colors.text = setAlpha(colors.text, 0.16);
        colors.border = colors.text;
    }

    if (hasError) {
        colors.border = palette.alert.main;
    }

    const actionStyles = disabled
        ? css`
              cursor: not-allowed;
          `
        : css`
              cursor: pointer;
              .input__field:focus {
                  outline: none;

                  & + .input__label {
                      transform: translate(0.25rem, -65%) scale(0.8);
                      color: ${colors.active};
                  }
              }
          `;

    return css`
        ${actionStyles}
        color: ${colors.text};
        border: 1px solid ${colors.border};

        .input {
            position: relative;

            .input__label {
                position: absolute;
                padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
                white-space: nowrap;
                transform: translate(0, 0);
                background: white;
                transition: transform 120ms ease-in;
            }

            .input__field {
                width: 100%;
                border: none;
            }
        }
    `;
};

const TextInput = styled(TextInputBase)<PTextInput>`
    ${getTextInputVariables};
`;

export default TextInput;
