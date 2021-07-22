import React, { useRef } from 'react';
import { usePopper } from 'react-popper';

import { useClickAway } from '../../shared';
import Transition from '../transition/Transition';

import {
    DEFAULT_POPOVER_OFFSET,
    DEFAULT_POPOVER_PLACEMENT,
    POPOVER_OFFSET_VALUES,
} from './Popover.constants';
import PPopover from './Popover.props';

const Popover = ({
    anchorReference,
    children,
    isVisible,
    onClickAway,
    noAnimation = false,
    placement = DEFAULT_POPOVER_PLACEMENT,
    offset = DEFAULT_POPOVER_OFFSET,
}: PPopover): JSX.Element | null => {
    const popperReference = useRef(null);
    const { styles, attributes } = usePopper(anchorReference.current, popperReference.current, {
        placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [POPOVER_OFFSET_VALUES[offset[0]], POPOVER_OFFSET_VALUES[offset[1]]],
                },
            },
        ],
    });

    // when a onClickAway callback is provided it will fire when the user clicks
    // away from the button or the popover (basically everything else)
    useClickAway([popperReference, anchorReference], onClickAway);

    return (
        <div ref={popperReference} style={styles.popper} {...attributes.popper}>
            <Transition
                isVisible={isVisible}
                type={['fade', 'scale']}
                speed={noAnimation ? 'instant' : 'normal'}
            >
                {children}
            </Transition>
        </div>
    );
};

export default Popover;
