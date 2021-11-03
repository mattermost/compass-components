import { SIZES } from '../../utilities/spacing';
import { POPOVER_OFFSET_TOKENS, POPOVER_PLACEMENTS } from '../../utilities/popover';

import type { TMenuOffset, TMenuPlacement } from './Menu.types';

const DEFAULT_MENU_PLACEMENT: TMenuPlacement = 'bottom';
const DEFAULT_POPOVER_OFFSET: TMenuOffset = [0, 0];

export {
    DEFAULT_POPOVER_OFFSET,
    POPOVER_OFFSET_TOKENS as MENU_OFFSET_TOKENS,
    SIZES as MENU_OFFSET_VALUES,
    POPOVER_PLACEMENTS as MENU_PLACEMENTS,
    DEFAULT_MENU_PLACEMENT,
};
