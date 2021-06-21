import React from 'react';

import Grid from '../../utilities/layout';
import Shape from '../../foundations/shape';
import Text, { TTextSizeToken } from '../text';
import { Utils } from '../../shared';

import { TSwitchDimentions } from './Switch.types';
import { DEFAULT_SWITCH_SIZE, SWITCH_SIZE_MAPPING } from './Switch.constants';
import { PSwitch } from './Switch.props';

const SwitchBase: React.FC<PSwitch> = ({
    label,
    size = DEFAULT_SWITCH_SIZE,
    className,
    toggled,
    onClick,
}: PSwitch) => {
    let labelSize: TTextSizeToken = 100;

    const switchDimentions: TSwitchDimentions = SWITCH_SIZE_MAPPING[size];

    const hasLabel = Utils.isString(label) && label.length > 0;

    switch (size) {
        case 'lg':
            switchDimentions.height = 32;
            switchDimentions.width = 52;
            switchDimentions.innerWidth = 26;
            labelSize = 200;
            break;
        case 'sm':
            switchDimentions.height = 16;
            switchDimentions.width = 26;
            switchDimentions.innerWidth = 12;
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
            <input className={'input'} id="hidden__input" checked={toggled} type={'checkbox'} />
            <Shape
                className={'container'}
                width={switchDimentions.width}
                height={switchDimentions.height}
                radius={'pill'}
            >
                <Shape radius={'circle'} width={switchDimentions.innerWidth} className={'toggle'} />
            </Shape>
            {hasLabel && (
                <Text element={'span'} className={'label'} size={labelSize} margin={'none'}>
                    {label}
                </Text>
            )}
        </Grid>
    );
};

export default SwitchBase;
