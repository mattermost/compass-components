import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha, blendColors } from '../../shared';

import RadioBase from './Radio.base';
import { PRadio } from './Radio.props';

const getRadioVariables = ({
    theme: { palette, action, text },
    hasError,
    disabled,
}: ThemedStyledProps<PRadio, TTheme>): FlattenSimpleInterpolation => {
    const checkedColor = hasError ? palette.alert.main : palette.primary.main;
    const hoverColor = action.hover;
    const mainColor = hasError ? palette.alert.main : text.primary;

    const actionStyles = disabled
        ? css`
              &--input {
                  cursor: not-allowed;
                  opacity: 0.5;
                  &--control {
                      cursor: not-allowed;
                  }
              }
          `
        : css`
              &:hover {
                  &--control {
                      border-color: ${blendColors(
                          mainColor,
                          setAlpha(hoverColor, action.hoverOpacity)
                      )};
                      &:after {
                          background: ${blendColors(
                              mainColor,
                              setAlpha(hoverColor, action.hoverOpacity)
                          )};
                      }
                  }
              }
              &:focus {
                  box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 3px ${checkedColor};
              }
          `;

    return css`
        ${actionStyles}
        color: ${mainColor};
        --radio-checked-color: ${checkedColor};
        --radio-main-color: ${mainColor};
    `;
};

const Radio = styled(RadioBase)<PRadio>`
    ${getRadioVariables};
    cursor: pointer;
    position: relative;
    margin: 0;

    &--input {
        position: absolute;
    }

    &--control {
        position: relative;
        border: 2px solid var(--radio-main-color);

        &:after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 70%;
            height: 70%;
            border-radius: 100%;
            background: var(--radio-checked-color);
            transform: scale(0);
            transition: all 0.2s ease;
        }
    }

    &--input:checked + &--control {
        border-color: var(--radio-checked-color);

        &:after {
            transform: scale(1);
            transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
        }
    }

    &--label {
        margin-left: 8px;
    }
`;

export default Radio;
