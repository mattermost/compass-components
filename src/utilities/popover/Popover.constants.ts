import { SIZES } from '../spacing';

import type { TPopoverOffset, TPopoverOffsetToken, TPopoverPlacement } from './Popover.types';

const POPOVER_OFFSET_TOKENS: TPopoverOffsetToken[] = [
    0, 25, 50, 75, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800,
];

const DEFAULT_POPOVER_OFFSET: TPopoverOffset = [0, 0];

const POPOVER_PLACEMENTS: TPopoverPlacement[] = [
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
];

const DEFAULT_POPOVER_PLACEMENT: TPopoverPlacement = 'bottom';

export {
    DEFAULT_POPOVER_OFFSET,
    POPOVER_OFFSET_TOKENS,
    SIZES as POPOVER_OFFSET_VALUES,
    POPOVER_PLACEMENTS,
    DEFAULT_POPOVER_PLACEMENT,
};
