import { MutableRefObject, ReactNode } from 'react';

import { TPopoverOffset, TPopoverPlacement } from './Popover.types';

type PPopover = {
    children: ReactNode | ReactNode[];
    anchorReference: MutableRefObject<null>;
    isVisible: boolean;
    placement?: TPopoverPlacement;
    offset?: TPopoverOffset;
    className?: string;
};

export default PPopover;
