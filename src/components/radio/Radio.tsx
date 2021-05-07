import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha, blendColors } from '../../shared';

import RadioBase from './Radio.base';
import { PRadio } from './Radio.props';

const getRadioVariables = ({
    theme: { palette, action, text },
    hasError = false,
    disabled = false,
    checked = false,
}: ThemedStyledProps<PRadio, TTheme>): FlattenSimpleInterpolation => {
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
                  .control {
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
          `;

    return css`
        ${actionStyles}
        color: ${colors.text};
        --radio-checked-color: ${colors.checked};
        --radio-main-color: ${colors.border};
    `;
};

const Radio = styled(RadioBase)<PRadio>`
    ${getRadioVariables};
    .input {
        display: none;
    }

    .control {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--radio-main-color);

        &:after {
            content: '';
            width: calc(50% + 1px);
            height: calc(50% + 1px);
            border-radius: 100%;
            background: var(--radio-checked-color);
            transform: scale(0);
            transition: all 0.2s ease;
        }
    }

    .input:checked + .control {
        border-color: var(--radio-checked-color);

        &:after {
            transform: scale(1);
            transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
        }
    }

    .label {
        margin-left: 8px;
    }
`;

export default Radio;
