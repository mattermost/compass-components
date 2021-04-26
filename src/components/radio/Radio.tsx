import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha, blendColors } from '../../shared';

import RadioBase from './Radio.base';
import { DEFAULT_RADIO_STATE } from './Radio.constants';
import { PRadio } from './Radio.props';

const getRadioVariables = ({
    theme: { palette, action },
    state = DEFAULT_RADIO_STATE,
    disabled = false,
}: ThemedStyledProps<PRadio, TTheme>): FlattenSimpleInterpolation => {
    const isInvalid = state === 'invalid';

    const mainColor = isInvalid ? palette.alert.main : palette.primary.main;
    const hoverColor = action.hover;

    const actionStyles = disabled
        ? null
        : css`
              &:hover {
                  background: ${blendColors(mainColor, setAlpha(hoverColor, action.hoverOpacity))};
              }
              &:active {
                  background: ${blendColors(mainColor, setAlpha(hoverColor, action.activeOpacity))};
              }
              &:focus + .radio__control {
                  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 2px ${mainColor};
              }
          `;

    return css`
        ${actionStyles}
        color: ${mainColor};
        --radio-checked-color: ${mainColor};
        box-shadow: inset 0 0 0 1px ${mainColor};
    `;
};

const Radio = styled(RadioBase)<PRadio>`
    .radio__control {
        ${getRadioVariables};
    }

    .radio__input {
        input {
            opacity: 0;
            width: 0;
            height: 0;

            ${getRadioVariables};
        }
        input:checked + .radio__control {
            color: var(--radio-checked--color);
            transition: background-color 200ms 0ms ease-in-out, opacity 200ms 125ms ease-in,
                scale 2000ms 0ms cubic-bezier(0.17, 0.67, 0.82, 0.28);
        }
    }
`;

export default Radio;
