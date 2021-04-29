import React from 'react';

import Grid from '../../foundations/layout';
import Shape from '../../foundations/shape';
import Text, { TTextSizeToken } from '../text';
import HiddenComponent from '../hidden_component/HiddenComponent';
import { Utils } from '../../shared';

import { TSwitchWidth, TSwitchHeight, TSwitchInnerWidth } from './Switch.types';
import {
    DEFAULT_SWITCH_HEIGHT,
    DEFAULT_SWITCH_WIDTH,
    DEFAULT_SWITCH_INNER_WIDTH,
    DEFAULT_SWITCH_SIZE,
} from './Switch.constants';
import { PSwitch } from './Switch.props';

const SwitchBase: React.FC<PSwitch> = ({
    label,
    size = DEFAULT_SWITCH_SIZE,
    className,
    onClick,
}: PSwitch) => {
    let labelSize: TTextSizeToken = 100;
    let switchHeight: TSwitchHeight = DEFAULT_SWITCH_HEIGHT;
    let switchWidth: TSwitchWidth = DEFAULT_SWITCH_WIDTH;
    let switchInnerWidth: TSwitchInnerWidth = DEFAULT_SWITCH_INNER_WIDTH;

    const hasLabel = Utils.isString(label) && label.length > 0;

    switch (size) {
        case 'lg':
            switchHeight = 32;
            switchWidth = 52;
            switchInnerWidth = 26;
            labelSize = 200;
            break;
        case 'sm':
            switchHeight = 16;
            switchWidth = 26;
            switchInnerWidth = 12;
            labelSize = 75;
            break;
        default:
            break;
    }

    const children = (
        <Shape
            className={`${className}--container`}
            width={switchWidth}
            height={switchHeight}
            borderRadius={'pill'}
        >
            <Shape
                borderRadius={'circle'}
                width={switchInnerWidth}
                className={`${className}--toggle`}
            />
        </Shape>
    );

    return (
        <Grid
            row
            alignment={'center'}
            justify={'center'}
            flex={1}
            onClick={onClick}
            className={className}
        >
            <HiddenComponent
                componentClass={`${className}--input`}
                component={'input'}
                type={'checkbox'}
                children={children}
            />
            {hasLabel && (
                <Text
                    element={'span'}
                    className={`${className}--label`}
                    size={labelSize}
                    margin={'none'}
                >
                    {label}
                </Text>
            )}
        </Grid>
    );
};

export default SwitchBase;
