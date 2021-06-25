import React, { useRef } from 'react';
import { usePopper } from 'react-popper';

import PPopover from './Popover.props';

const Popover = ({
    anchor,
    children,
    show = false,
    placement = 'bottom',
}: PPopover): JSX.Element | null => {
    const popperReference = useRef(null);
    const { styles, attributes } = usePopper(anchor, popperReference.current, {
        placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 10],
                },
            },
        ],
    });

    return (
        <div ref={popperReference} style={styles.popper} {...attributes.popper}>
            {show && children}
        </div>
    );
};

export default Popover;
