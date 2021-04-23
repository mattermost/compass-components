import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import RadioBase from './Radio.base';
import { DEFAULT_RADIO_STATE } from './Radio.constants';
import { PRadio } from './Radio.props';

const getRadioVariables = ({
    theme: { palette, action, text },
    state = DEFAULT_RADIO_STATE,
}: ThemedStyledProps<PRadio, TTheme>): FlattenSimpleInterpolation => {
    const hasError = state === 'error';

    let borderColor = palette.primary.main;

    const hoverBorderColor = action.hover;

    let textColor = text.primary;

    switch (state) {
        case 'on':
            textColor = palette.primary.main;
            borderColor = palette.primary.main;
            break;
        case 'off':
            borderColor = text.secondary;
            break;
        case 'error':
            borderColor = palette.alert.main;
            break;
        case 'disabled':
            borderColor = text.disabled;
            break;
        default:
            break;
    }

    return css`
        border-color: ${borderColor};
        color: ${textColor};
        box-shadow: inset 0 0 0 1px ${borderColor};
        --radio-checked-color: ${palette.primary.main};
        ${!hasError && `box-shadow: inset 0 0 0 1px ${hoverBorderColor};`}
    `;
};

const Radio = styled(RadioBase)<PRadio>`
    align-items: stretch;

    // define local variables
    input[type='radio'] {
        opacity: 0;
        position: fixed;
        width: 0;
    }

    label {
        ${getRadioVariables};
    }

    input[type='radio']:checked + label {
        color: var(--radio-checked-color);
        transition: background-color 200ms 0ms ease-in-out, opacity 200ms 125ms ease-in,
            scale 2000ms 0ms cubic-bezier(0.17, 0.67, 0.82, 0.28);
    }
`;

export default Radio;
