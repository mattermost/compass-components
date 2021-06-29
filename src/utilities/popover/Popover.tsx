import React, { useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';

import Transition from '../transition/Transition';

import PPopover from './Popover.props';

const Popover = ({
    anchorReference,
    children,
    isVisible,
    placement = 'bottom',
}: PPopover): JSX.Element | null => {
    const popperReference = useRef(null);
    const { styles, attributes, update } = usePopper(
        anchorReference.current,
        popperReference.current,
        {
            placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
            ],
        }
    );

    useEffect(() => {
        update?.();
    }, [update, popperReference]);

    return (
        <Transition isVisible={isVisible} type={['fade', 'scale']}>
            <div ref={popperReference} style={styles.popper} {...attributes.popper}>
                {children}
            </div>
        </Transition>
    );
};

export default Popover;
