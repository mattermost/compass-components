import React from 'react';

import Text from '../text';
import { Utils } from '../../shared';

import { DEFAULT_SWITCH_SIZE } from './Switch.constants';
import PSwitch from './Switch.props';
import SwitchRoot from './Switch.root';

const Switch: React.FC<PSwitch> = ({
    label,
    disabled = false,
    size = DEFAULT_SWITCH_SIZE,
    toggled = true,
    oChange,
}: PSwitch) => {
    const hasLabel = Utils.isString(label) && label.length > 0;

    return (
        <SwitchRoot for="hidden__input" size={size} disabled={disabled}>
            <input
                className={'input'}
                id="hidden__input"
                checked={toggled}
                defaultChecked={toggled}
                type={'checkbox'}
                onChange={oChange}
            />
            <div className={'container'}>
                <div className={'toggle'} />
            </div>
            {hasLabel && (
                <Text element={'span'} className={'label'}>
                    {label}
                </Text>
            )}
        </SwitchRoot>
    );
};

export default Switch;
