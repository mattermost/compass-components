import { ReactNode } from 'react';
import { Placement, VirtualElement } from '@popperjs/core';

import { TPopoverSizeToken } from './Popover.types';

type PPopover = {
    children: ReactNode | ReactNode[];
    anchor: Element | VirtualElement;
    placement?: Placement;
    show?: boolean;
    /**
     * the size token to define the Popover size
     * @default 'md'
     */
    size?: TPopoverSizeToken;
    className?: string;
};

export default PPopover;
