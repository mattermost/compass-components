import { TYPE_MARGINS, TYPE_COLORS, TTypeMargin, TTypeColor } from '../../foundations/type';

import { TTextSize, TTextVariant, TTextWeight } from './Text.types';

const TEXT_SIZES: TTextSize[] = [25, 50, 75, 100, 200, 300];

const DEFAULT_TEXT_SIZE: TTextSize = 100;

const TEXT_VARIANTS: TTextVariant[] = ['p', 'span'];

const DEFAULT_TEXT_VARIANT: TTextVariant = 'p';

const TEXT_WEIGHTS: TTextWeight[] = ['regular', 'bold'];

const DEFAULT_TEXT_WEIGHT: TTextWeight = 'regular';

const DEFAULT_TEXT_MARGIN: TTypeMargin = 'both';

const DEFAULT_TEXT_COLOR: TTypeColor = 'primary';

export {
    TEXT_SIZES,
    DEFAULT_TEXT_SIZE,
    TEXT_VARIANTS,
    DEFAULT_TEXT_VARIANT,
    TEXT_WEIGHTS,
    DEFAULT_TEXT_WEIGHT,
    TYPE_MARGINS as TEXT_MARGINS,
    DEFAULT_TEXT_MARGIN,
    TYPE_COLORS as TEXT_COLORS,
    DEFAULT_TEXT_COLOR,
};
