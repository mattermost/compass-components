import React from 'react';

import { Utils } from '../../shared';

import { DEFAULT_RADIO_SIZE } from './Radio.constants';
import PRadio from './Radio.props';
import RadioRoot from './Radio.root';
import RadioLabelRoot from './RadioLabel.root';

const Radio: React.FC<PRadio> = ({ label, size = DEFAULT_RADIO_SIZE, ...rest }: PRadio) => {
    const hasLabel = Utils.isString(label) && label.length > 0;

    return (
        <RadioRoot size={size} {...rest}>
            <input id="hidden__input" type={'radio'} />
            <span />
            {hasLabel && <RadioLabelRoot size={size}>{label}</RadioLabelRoot>}
        </RadioRoot>
    );
};

export default Radio;
