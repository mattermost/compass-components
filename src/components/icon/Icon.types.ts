import { IconGlyphs } from '@mattermost/compass-icons/build/IconGlyphs';

type TIconGlyph = 'none' | keyof typeof IconGlyphs;

type TIconSize = 10 | 12 | 16 | 20 | 28 | 32 | 40 | 52 | 64 | 104;

export type { TIconGlyph, TIconSize };
