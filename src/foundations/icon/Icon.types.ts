import { IconGlyphs } from '@mattermost/compass-icons/build/IconGlyphs';

type TIconSize = 10 | 12 | 16 | 20 | 28 | 32 | 40 | 52 | 64 | 104;

type TIconGlyph = keyof typeof IconGlyphs;

export type { TIconGlyph, TIconSize };
