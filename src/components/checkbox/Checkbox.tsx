import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import CheckboxBase from './Checkbox.base';
import PCheckbox from './Checkbox.props';
import { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_STATE } from './Checkbox.constants';

const baseProperties = ({
    state = DEFAULT_CHECKBOX_STATE,
    size = DEFAULT_CHECKBOX_SIZE,
    className,
}: PCheckbox): PCheckbox => ({
    state,
    size,
    className,
});

const getCheckboxVariables = ({
    theme: { palette, background, text },
    size,
    state,
}: ThemedStyledProps<PCheckbox, TTheme>): FlattenSimpleInterpolation => {
    const textColor = text.primary;
    const checkmarkColor = text.contrast;

    let checkboxBg = background.default;

    const borderColor = text.disabled;

    if (state === 'on') {
        checkboxBg = palette.primary.main;
    }

    // @default: `size === 'medium'`
    let iconMargin = 7;

    if (size === 'sm') {
        iconMargin = 5;
    } else if (size === 'lg') {
        iconMargin = 8;
    }

    return css`
        --checkbox-bg-color: ${checkboxBg};
        --checkbox-text-color: ${textColor};
        --checkbox-border-color: ${borderColor};
        --checkbox-icon-color: ${checkmarkColor};
        --checkbox-icon-margin: ${iconMargin}px;
    `;
};

const Checkbox = styled(CheckboxBase).attrs(baseProperties)<PCheckbox>`
    ${getCheckboxVariables};
    // set default text-color
    color: var(--checkbox-text-color);

    div {
        background: var(--checkbox-bg-color);
    }

    i {
        color: var(--checkbox-icon-color);
    }

    transition: all 500ms 0s ease-in-out;
`;

export default Checkbox;
