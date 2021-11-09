import React from 'react';

import { Utils } from '../../shared';

import { DEFAULT_RADIO_SIZE } from './Radio.constants';
import type PRadio from './Radio.props';
import RadioRoot from './Radio.root';
import RadioLabelRoot from './RadioLabel.root';

const Radio: React.FC<PRadio> = (props: PRadio) => {
    const {
        label,
        size = DEFAULT_RADIO_SIZE,
        hasError = false,
        disabled = false,
        checked = false,
        onChange = Utils.noop,
        ...rest
    } = props;

    const hasLabel =
        (Utils.isString(label) && label.length > 0) ||
        Utils.isFunctionalComponent(label) ||
        (typeof label !== 'boolean' && React.isValidElement(label));

    const rootProperties = {
        size,
        hasError,
        disabled,
        checked,
        ...rest,
    };

    return (
        <RadioRoot {...rootProperties}>
            <input type={'checkbox'} checked={checked} onChange={onChange} />
            <div />
            {hasLabel && <RadioLabelRoot size={size}>{label}</RadioLabelRoot>}
        </RadioRoot>
    );
};

export default Radio;
