import { IconGlyphs } from '@mattermost/compass-icons/build/IconGlyphs';

import { TTHemeColors } from '../../foundations/theme-provider/themes/theme.types';

type TIconGlyph = 'none' | typeof IconGlyphs;

type TIconSize = 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 40 | 52 | 64 | 104;

type TIconColors = keyof TTHemeColors;

export type { TIconGlyph, TIconSize, TIconColors };
