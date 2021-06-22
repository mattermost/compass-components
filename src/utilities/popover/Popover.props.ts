import { VirtualElement } from '@popperjs/core';

import { TPopoverSizeToken } from './Popover.types';

type PPopover = {
    show?: boolean;
    /**
     * the size token to define the Popover size
     * @default 'md'
     */
    size?: TPopoverSizeToken;
    anchor?: Element | VirtualElement | null;
    className?: string;
};

export default PPopover;
