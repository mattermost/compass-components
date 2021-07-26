import React from 'react';

import Icon from '../../foundations/icon';
import Text from '../text';
import { Utils } from '../../shared';

import PCheckbox from './Checkbox.props';
import { CHECKBOX_VALUES_MAPPING, DEFAULT_CHECKBOX_SIZE } from './Checkbox.constants';
import CheckboxRoot from './Checkbox.root';

const Checkbox: React.FC<PCheckbox> = ({
    label,
    size = DEFAULT_CHECKBOX_SIZE,
    checked = false,
    disabled = false,
    hasError = false,
    onChange = Utils.noop,
    ...rest
}: PCheckbox): JSX.Element => {
    const hasLabel = Utils.isString(label) && label.length > 0;

    const rootProperties = {
        size,
        hasError,
        disabled,
        checked,
    };

    return (
        <CheckboxRoot {...rootProperties} {...rest}>
            <input type={'checkbox'} checked={checked} onChange={onChange} />
            <div>
                <Icon glyph="check" size={CHECKBOX_VALUES_MAPPING[size].iconSize} />
            </div>
            {hasLabel && <Text element={'span'}>{label}</Text>}
        </CheckboxRoot>
    );
};

export default Checkbox;
