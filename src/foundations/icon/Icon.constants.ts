import { IconGlyphs } from '@mattermost/compass-icons/build/IconGlyphs';

import { TIconSize } from './Icon.types';

const ICON_SIZES: TIconSize[] = [10, 12, 16, 20, 28, 32, 40, 52, 64, 104];

const ICON_FONT_SIZES: Record<TIconSize, number> = {
    10: 12,
    12: 14,
    16: 18,
    20: 24,
    28: 31,
    32: 36,
    40: 48,
    52: 60,
    64: 72,
    104: 120,
};

export { ICON_FONT_SIZES, IconGlyphs as ICON_GLYPHS, ICON_SIZES };
