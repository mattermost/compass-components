import { MutableRefObject, ReactNode } from 'react';

import { TPopoverOffset, TPopoverPlacement } from './Popover.types';

type PPopover = {
    /**
     * children to render inside the Popover
     */
    children: ReactNode | ReactNode[];
    /**
     * the reference (ref) to the element the Popover should be anchored to
     */
    anchorReference: MutableRefObject<null>;
    /**
     * show the Popover
     */
    isVisible: boolean;
    /**
     * where should the Popover be placed acording to the anchor element
     * @default 'bottom'
     */
    placement?: TPopoverPlacement;
    /**
     * the offset the Popover has to the anchor element. First value is offset
     * on the x-axis, second is offset on the y-axis
     * @default [0, 0]
     */
    offset?: TPopoverOffset;
    /**
     * custom className
     */
    className?: string;
};

export default PPopover;
