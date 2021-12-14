import type { NonBrokenIconGlyphTypes } from '@mattermost/compass-icons/IconGlyphs';

import type { TTheme } from '../../utilities/theme';

type TIconGlyph = 'none' | NonBrokenIconGlyphTypes;

type TIconSizeToken = 8 | 10 | 12 | 16 | 20 | 28 | 32 | 40 | 52 | 64 | 104;

type TIconColor = 'inherit' | keyof TTheme['palette'];

export type { TIconGlyph, TIconSizeToken, TIconColor };
