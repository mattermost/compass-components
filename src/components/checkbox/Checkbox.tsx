import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import CheckboxBase from './Checkbox.base';
import PCheckbox from './Checkbox.props';
import { DEFAULT_CHECKBOX_STATE, DEFAULT_CHECKBOX_SIZE } from './Checkbox.constants';

const baseProperties = ({ state = DEFAULT_CHECKBOX_STATE }: PCheckbox): PCheckbox => ({
    state,
    className: 'Checkbox',
});

const getCheckboxVariables = ({
    theme: { palette, background, text },
    state,
}: ThemedStyledProps<PCheckbox, TTheme>): FlattenSimpleInterpolation => {
    let checkmarkColor = 'transparent';
    let checkboxBg = background.default;
    let borderColor = text.disabled;

    switch (state) {
        case 'on':
            checkmarkColor = text.contrast;
            checkboxBg = palette.primary.main;
            borderColor = palette.primary.main;
            break;
        case 'off':
            borderColor = text.secondary;
            break;
        case 'status':
            borderColor = palette.alert.main;
            break;
        case 'disabled':
            checkboxBg = background.default;
            break;
        default:
            break;
    }

    return css`
        --checkbox-bg-color: ${checkboxBg};
        --checkbox-border-color: ${borderColor};
        --checkbox-icon-color: ${checkmarkColor};
    `;
};

const Checkbox = styled(CheckboxBase).attrs(baseProperties)<PCheckbox>`
    ${getCheckboxVariables};
    cursor: pointer;

    .Checkbox--input {
        display: none;
    }

    i {
        border-radius: 2px;
        background: var(--checkbox-bg-color);
        border: 1px solid var(--checkbox-border-color);
        color: var(--checkbox-icon-color);

        transition: background-color 200ms 0ms ease-in-out, opacity 200ms 125ms ease-in,
            scale 2000ms 0ms cubic-bezier(0.17, 0.67, 0.82, 0.28);
    }
`;

export default Checkbox;
