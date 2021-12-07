import type { MutableRefObject, ReactNode } from 'react';

import type { TIconGlyph } from '../../foundations/icon';
import type { TonClickAwayCallback } from '../../shared';

type PBottomSheets = {
    /**
     * the reference (ref) to the element the Popover should be anchored to
     */
    items: any;
    triggerReference: MutableRefObject<null>;
    open: boolean;
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
    onClickAway?: TonClickAwayCallback;
    /**
     * custom className
     */
    className?: string;
};

type PBottomSheetsRoot = Required<Pick<PBottomSheets, 'open'>>;

type PBottomSheetRoot = {
    /**
     * children to render inside the Popover
     */
    children?: ReactNode | ReactNode[];
    active: boolean;
    title?: string;
    button?: TIconGlyph;
};

export type { PBottomSheetsRoot, PBottomSheetRoot };

export default PBottomSheets;
