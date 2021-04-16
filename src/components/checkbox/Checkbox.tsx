import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import CheckboxBase from './Checkbox.base';
import PCheckbox from './Checkbox.props';
import { DEFAULT_CHECKBOX_STATE } from './Checkbox.constants';

const baseProperties = ({ state = DEFAULT_CHECKBOX_STATE, onClick }: PCheckbox): PCheckbox => ({
    state,
    className: 'Checkbox',
    onClick,
});

const getCheckboxVariables = ({
    theme: { palette, background, text },
    state,
}: ThemedStyledProps<PCheckbox, TTheme>): FlattenSimpleInterpolation => {
    const textColor = text.primary;

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
        --checkbox-text-color: ${textColor};
        --checkbox-border-color: ${borderColor};
        --checkbox-icon-color: ${checkmarkColor};
    `;
};

const Checkbox = styled(CheckboxBase).attrs(baseProperties)<PCheckbox>`
    ${getCheckboxVariables};
    // set default text-color
    color: var(--checkbox-text-color);

    .Checkbox--Shape {
        background: var(--checkbox-bg-color);
        border: 1px solid var(--checkbox-border-color);
    }

    i {
        color: var(--checkbox-icon-color);
    }

    transition: all 500ms 0s ease-in-out;
`;

export default Checkbox;
