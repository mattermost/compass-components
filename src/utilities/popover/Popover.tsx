import React, { useRef } from 'react';
import { usePopper } from 'react-popper';

import PPopover from './Popover.props';

const Popover = ({ anchor, show = false }: PPopover): JSX.Element | null => {
    const popperReference = useRef(null);
    const { styles, attributes } = usePopper(anchor, popperReference.current, {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [10, 50],
                },
            },
        ],
    });

    return show ? (
        <div ref={popperReference} style={styles.popper} {...attributes.popper}>
            Popper element
        </div>
    ) : null;
};

export default Popover;
