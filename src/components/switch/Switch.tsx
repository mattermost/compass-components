import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import SwitchBase from './Switch.base';
import { DEFAULT_SWITCH_STATE } from './Switch.constants';
import { PSwitch } from './Switch.props';

const baseProperties = ({ state = DEFAULT_SWITCH_STATE }: PSwitch): PSwitch => ({
    state,
    className: 'Switch',
});

const getSwitchVariables = ({
    theme: { palette, text },
    state = DEFAULT_SWITCH_STATE,
}: ThemedStyledProps<PSwitch, TTheme>): FlattenSimpleInterpolation => {
    let borderColor = palette.primary.main;
    let textColor = text.primary;

    switch (state) {
        case 'on':
            borderColor = palette.primary.main;
            break;
        case 'off':
            borderColor = text.secondary;
            break;
        case 'disabled':
            borderColor = text.disabled;
            textColor = text.disabled;
            break;
        default:
            break;
    }

    return css`
        --var-background-color: ${borderColor};
        color: ${textColor};
        --switch-checked-color: ${palette.primary.main};
    `;
};

const Switch = styled(SwitchBase).attrs(baseProperties)<PSwitch>`
    ${getSwitchVariables};

    .Switch--checkbox {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    .Switch--background {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        background: var(--var-background-color);
        border-radius: 100px;
        position: relative;
        transition: background-color 0.2s;
    }

    .Switch--background .Switch--button {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        transition: 0.2s;
        background: #fff;
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }

    .Switch--checkbox:checked + .Switch--background .Switch--button {
        background: var(--switch-checked-color);
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }

    .Switch--background:active .Switch--button {
        width: 30px;
    }

    .Switch--label {
        margin-left: 12px;
    }
`;

export default Switch;
