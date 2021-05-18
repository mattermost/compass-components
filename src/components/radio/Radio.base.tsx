import React from 'react';

import Grid from '../../foundations/layout';
import Shape from '../../foundations/shape';
import Text, { TTextSizeToken } from '../text';
import { Utils } from '../../shared';

import { DEFAULT_RADIO_SIZE, RADIO_SIZE_MAPPING } from './Radio.constants';
import { PRadio } from './Radio.props';
import { TRadioSize } from './Radio.types';

const RadioBase: React.FC<PRadio> = ({
    label,
    size = DEFAULT_RADIO_SIZE,
    onClick,
    className,
    checked,
}: PRadio) => {
    let labelSize: TTextSizeToken = 100;
    let radioSize: TRadioSize = RADIO_SIZE_MAPPING[size];

    const hasLabel = Utils.isString(label) && label.length > 0;

    switch (size) {
        case 'lg':
            radioSize = 20;
            labelSize = 200;
            break;
        case 'md':
            radioSize = 16;
            labelSize = 100;
            break;
        case 'sm':
            radioSize = 12;
            labelSize = 75;
            break;
        default:
            break;
    }

    return (
        <Grid
            row
            component={'label'}
            for="hidden__input"
            alignment={'center'}
            justify={'center'}
            flex={1}
            onClick={onClick}
            className={className}
        >
            <input className={'input'} id="hidden__input" checked={checked} type={'Radio'} />
            <Shape
                component={'span'}
                className={'control'}
                width={radioSize}
                height={radioSize}
                borderRadius={'circle'}
            />
            {hasLabel && (
                <Text element={'span'} className={'label'} size={labelSize}>
                    {label}
                </Text>
            )}
        </Grid>
    );
};

export default RadioBase;
