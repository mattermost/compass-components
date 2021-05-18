import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha, blendColors } from '../../shared';

import TextInputBase from './TextInput.base';
import { PTextInput } from './TextInput.props';

const getTextInputVariables = ({
    theme: { palette, action, text },
    hasError = false,
    disabled = false,
    active = false,
}: ThemedStyledProps<PTextInput, TTheme>): FlattenSimpleInterpolation => {
    const opacities: Record<string, number> = {
        hover: 0.16,
    };

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
              &:hover {
                  border-color: ${blendColors(
                      colors.border,
                      setAlpha(colors.border, opacities.hover)
                  )};
              }
              &:focus {
                  box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 3px ${colors.active};
              }
          `;

    return css`
        ${actionStyles}
        color: ${colors.text};
        border: 1px solid ${colors.border};
    `;
};

const TextInput = styled(TextInputBase)<PTextInput>`
    ${getTextInputVariables};
    .input {
        border: none;
    }
    .input:focus {
        outline: none;
    }
`;

export default TextInput;
