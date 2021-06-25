import { ReactNode } from 'react';

import { TPopoverAnchorElement, TPopoverOffset, TPopoverPlacement } from './Popover.types';

type PPopover = {
    children: ReactNode | ReactNode[];
    anchor: TPopoverAnchorElement;
    placement?: TPopoverPlacement;
    offset?: TPopoverOffset;
    show?: boolean;
    className?: string;
};

export default PPopover;
