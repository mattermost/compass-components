import IconGlyphs from '@mattermost/compass-icons/IconGlyphs';

import type { TIconColor, TIconGlyph, TIconSizeToken } from './Icon.types';

const DEFAULT_ICON_SIZE = 20;

const ICON_SIZES: TIconSizeToken[] = [8, 10, 12, 16, 20, 28, 32, 40, 52, 64, 104];

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
    ICON_GLYPHS,
    DEFAULT_ICON_GLYPH,
    ICON_COLORS,
    DEFAULT_ICON_COLOR,
};
