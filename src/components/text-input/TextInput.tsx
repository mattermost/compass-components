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
        placeholder: text.disabled,
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
              .input {
                  pointer-events: none;
                  user-select: none;
              }
          `
        : css`
              cursor: pointer;
              &:focus-within {
                  border: 2px solid ${colors.active};
              }
              .input__field:focus {
                  outline: none;

                  &::placeholder {
                      color: ${colors.placeholder};
                  }

                  & + .input__label {
                      transform: translate(-1.8rem, -1.4rem) scale(0.7);
                      color: ${colors.active};
                  }
              }
          `;

    return css`
        ${actionStyles}
        color: ${colors.text};
        border: 1px solid ${colors.border};

        .input__field::placeholder {
            color: transparent;
            transition: color 200ms ease-in;
        }
        .input {
            position: relative;

            .input__label {
                position: absolute;
                left: 2rem;
                padding: 0 4px;
                white-space: nowrap;
                transform: translate(0, 0);
                background: white;
                transition: transform 200ms ease-in;
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
