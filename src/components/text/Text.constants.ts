import { TYPE_MARGINS, TYPE_COLORS, TTypeMargin, TTypeColor } from '../../foundations/type';

import { TTextSize, TTextElement, TTextWeight } from './Text.types';

const TEXT_SIZES: TTextSize[] = [25, 50, 75, 100, 200, 300];

const DEFAULT_TEXT_SIZE: TTextSize = 100;

const TEXT_ELEMENTS: TTextElement[] = ['p', 'span'];

const DEFAULT_TEXT_ELEMENT: TTextElement = 'p';

const TEXT_WEIGHTS: TTextWeight[] = ['regular', 'bold'];

const DEFAULT_TEXT_WEIGHT: TTextWeight = 'regular';

const DEFAULT_TEXT_MARGIN: TTypeMargin = 'both';

const DEFAULT_TEXT_COLOR: TTypeColor = 'primary';

export {
    TEXT_SIZES,
    DEFAULT_TEXT_SIZE,
    TEXT_ELEMENTS,
    DEFAULT_TEXT_ELEMENT,
    TEXT_WEIGHTS,
    DEFAULT_TEXT_WEIGHT,
    TYPE_MARGINS as TEXT_MARGINS,
    DEFAULT_TEXT_MARGIN,
    TYPE_COLORS as TEXT_COLORS,
    DEFAULT_TEXT_COLOR,
};
