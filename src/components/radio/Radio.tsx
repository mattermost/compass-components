import React from 'react';

import Text from '../text';
import { Utils } from '../../shared';

import { DEFAULT_RADIO_SIZE } from './Radio.constants';
import PRadio from './Radio.props';
import RadioRoot from './Radio.root';

const Radio: React.FC<PRadio> = ({
    label,
    hasError,
    disabled,
    size = DEFAULT_RADIO_SIZE,
    checked,
}: PRadio) => {
    const hasLabel = Utils.isString(label) && label.length > 0;

    return (
        <RadioRoot hasError={hasError} disabled={disabled} checked={checked} size={size}>
            <input className={'input'} id="hidden__input" checked={checked} type={'Radio'} />
            <span className={'control'} />
            {hasLabel && (
                <Text element={'span'} className={'label'}>
                    {label}
                </Text>
            )}
        </RadioRoot>
    );
};

export default Radio;
