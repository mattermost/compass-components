import React from 'react';

import Text from '../text';
import { Utils } from '../../shared';

import { DEFAULT_SWITCH_SIZE } from './Switch.constants';
import type PSwitch from './Switch.props';
import SwitchRoot from './Switch.root';

const Switch: React.FC<PSwitch> = (props: PSwitch) => {
    const {
        label,
        size = DEFAULT_SWITCH_SIZE,
        disabled = false,
        toggled = false,
        onChange = Utils.noop,
        onClick = Utils.noop,
        ...rest
    } = props;

    const hasLabel = Utils.isString(label) && label.length > 0;

    const rootProperties = {
        size,
        disabled,
        toggled,
        onClick,
        ...rest,
    };

    return (
        <SwitchRoot {...rootProperties}>
            <input type={'checkbox'} checked={toggled} onChange={onChange} />
            <div className={'container'}>
                <div className={'toggle'} />
            </div>
            {hasLabel && <Text element={'span'}>{label}</Text>}
        </SwitchRoot>
    );
};

export default Switch;
