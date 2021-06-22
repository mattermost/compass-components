import React from 'react';

import Text from '../text';
import { Utils } from '../../shared';

import { DEFAULT_SWITCH_SIZE, SWITCH_VALUES_MAPPING } from './Switch.constants';
import { PSwitch } from './Switch.props';
import SwitchRoot from './Switch.root';

const Switch: React.FC<PSwitch> = ({
    label,
    hasError,
    disabled,
    size = DEFAULT_SWITCH_SIZE,
    toggled,
}: PSwitch) => {
    const hasLabel = Utils.isString(label) && label.length > 0;

    return (
        <SwitchRoot for="hidden__input" hasError={hasError} size={size} disabled={disabled}>
            <input className={'input'} id="hidden__input" checked={toggled} type={'checkbox'} />
            <div className={'container'}>
                <div className={'toggle'} />
            </div>
            {hasLabel && (
                <Text
                    element={'span'}
                    className={'label'}
                    size={SWITCH_VALUES_MAPPING[size].labelSize}
                    margin={'none'}
                >
                    {label}
                </Text>
            )}
        </SwitchRoot>
    );
};

export default Switch;
