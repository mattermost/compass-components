import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha, blendColors } from '../../shared';

import RadioBase from './Radio.base';
import { PRadio } from './Radio.props';

const getRadioVariables = ({
    theme: { palette, action },
    hasError,
    disabled,
}: ThemedStyledProps<PRadio, TTheme>): FlattenSimpleInterpolation => {
    const mainColor = hasError ? palette.alert.main : palette.primary.main;
    const hoverColor = action.hover;

    const actionStyles = disabled
        ? css`
              input {
                  cursor: not-allowed;
                  opacity: 0.9;
                  &:checked {
                      background: ${blendColors(
                          mainColor,
                          setAlpha(hoverColor, action.disabledOpacity)
                      )};
                  }
                  & + label {
                      cursor: not-allowed;
                  }
              }
          `
        : css`
              &:hover {
                  .label:after {
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
              &:focus {
                  box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 3px ${mainColor};
              }
          `;

    return css`
        ${actionStyles}
        color: ${mainColor};
        --radio-checked-color: ${mainColor};
        box-shadow: inset 0 0 0 ${mainColor};
    `;
};

const Radio = styled(RadioBase)<PRadio>`
    ${getRadioVariables};
    cursor: pointer;

    &--input {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    &--label {
        position: relative;
        border: 2px solid #efefef;

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
            opacity: 0.08;
            pointer-events: none;
        }
    }

    &--input:checked + &--label {
        background: var(--radio-checked-color);

        &:after {
            transform: scale(1);
            transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
            opacity: 1;
        }
    }
`;

export default Radio;
