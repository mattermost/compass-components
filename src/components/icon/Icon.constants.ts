import { IconGlyphs } from '@mattermost/compass-icons/build/IconGlyphs';

import { TIconGlyph, TIconSize } from './Icon.types';

const DEFAULT_ICON_SIZE = 20;

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

const ICON_GLYPHS: Record<TIconGlyph, string> = { none: 'none', ...IconGlyphs };

export { DEFAULT_ICON_SIZE, ICON_FONT_SIZES, ICON_GLYPHS, ICON_SIZES };
