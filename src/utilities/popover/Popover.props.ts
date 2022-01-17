import type { MutableRefObject, ReactNode } from 'react';

import type { TPopoverOffset, TPopoverPlacement } from './Popover.types';

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
     * renders Popover without animation
     * @default false
     */
    noAnimation?: boolean;
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
     * apply a z-index to the component to allow custom placing in the z-stack
     * @default 1
     */
    zIndex?: number;
    /**
     * handle clicking away from the popover and anchor references (refs).
     * this is very useful for setting isVisible state, or perform other actions
     * when clicking away.
     */
    onClickAway?: (event: Event) => void;
    /**
     * custom className
     */
    className?: string;
};

export default PPopover;
