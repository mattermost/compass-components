import IconGlyphs from '@mattermost/compass-icons/build/IconGlyphs';

import { TTHemeColors } from '../../foundations/theme-provider/themes/theme.types';

type TIconGlyph = 'none' | typeof IconGlyphs[number];

type TIconSize = 8 | 10 | 12 | 16 | 20 | 28 | 32 | 40 | 52 | 64 | 104;

type TIconColor = 'inherit' | keyof TTHemeColors;

export type { TIconGlyph, TIconSize, TIconColor };
