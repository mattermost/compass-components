import type { NonBrokenIconGlyphTypes } from '@mattermost/compass-icons/IconGlyphs';

import type { TNewTheme } from '../../utilities/theme';

type TIconGlyph = 'none' | NonBrokenIconGlyphTypes;

type TIconSizeToken = 8 | 10 | 12 | 16 | 20 | 28 | 32 | 40 | 52 | 64 | 104;

type TIconColor = 'inherit' | keyof TNewTheme['palettes'];

export type { TIconGlyph, TIconSizeToken, TIconColor };
