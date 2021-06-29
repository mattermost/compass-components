import { SIZES } from '../spacing';

import { TPopoverOffset, TPopoverOffsetToken } from './Popover.types';

const POPOVER_OFFSET_TOKEN: TPopoverOffsetToken[] = [
    0, 25, 50, 75, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800,
];

const DEFAULT_POPOVER_OFFSET: TPopoverOffset = [0, 0];

export { DEFAULT_POPOVER_OFFSET, POPOVER_OFFSET_TOKEN, SIZES as POPOVER_OFFSET_VALUES };
