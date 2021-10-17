import IconGlyphs from '@mattermost/compass-icons/IconGlyphs';

import type { TIconColor, TIconGlyph, TIconSize } from './Icon.types';

const DEFAULT_ICON_SIZE = 20;

const ICON_SIZES: TIconSize[] = [8, 10, 12, 16, 20, 28, 32, 40, 52, 64, 104];

const ICON_FONT_SIZES: Record<TIconSize, number> = {
    8: 10,
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

const ICON_GLYPHS: TIconGlyph[] = [
    'none',
    ...IconGlyphs.map((glyph: string) => glyph as TIconGlyph),
];

const DEFAULT_ICON_GLYPH: TIconGlyph = 'mattermost';

const ICON_COLORS: TIconColor[] = [
    'inherit',
    'primary',
    'secondary',
    'alert',
    'warning',
    'success',
];

const DEFAULT_ICON_COLOR: TIconColor = 'inherit';

export {
    ICON_SIZES,
    DEFAULT_ICON_SIZE,
    ICON_FONT_SIZES,
    ICON_GLYPHS,
    DEFAULT_ICON_GLYPH,
    ICON_COLORS,
    DEFAULT_ICON_COLOR,
};
