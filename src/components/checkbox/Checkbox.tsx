import React from 'react';

import Icon from '../../foundations/icon';
import Text from '../text';
import { Utils } from '../../shared';

import PCheckbox from './Checkbox.props';
import { CHECKBOX_VALUES_MAPPING } from './Checkbox.constants';
import CheckboxRoot from './Checkbox.root';

const Checkbox: React.FC<PCheckbox> = ({
    label,
    size,
    className,
    onClick,
    checked,
}: PCheckbox): JSX.Element => {
    const hasLabel = Utils.isString(label) && label.length > 0;

    return (
        <CheckboxRoot
            for="hidden__input"
            size={size}
            checked={checked}
            onClick={onClick}
            className={className}
        >
            <input className={'input'} id="hidden__input" checked={checked} type={'checkbox'} />
            <div className={'control'}>
                <Icon glyph="check" size={CHECKBOX_VALUES_MAPPING[size].iconSize} />
            </div>
            {hasLabel && (
                <Text
                    element={'span'}
                    className={'label'}
                    size={CHECKBOX_VALUES_MAPPING[size].labelSize}
                >
                    {label}
                </Text>
            )}
        </CheckboxRoot>
    );
};

export default Checkbox;
