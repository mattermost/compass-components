import {
    TYPOGRAPHY_MARGINS,
    TYPOGRAPHY_COLORS,
    DEFAULT_TYPOGRAPHY_MARGIN,
    DEFAULT_TYPOGRAPHY_COLOR,
} from '../../foundations/typography';

import { TTextSize, TTextElement, TTextWeight } from './Text.types';

const TEXT_SIZES: TTextSize[] = [25, 50, 75, 100, 200, 300];

const DEFAULT_TEXT_SIZE: TTextSize = 100;

const TEXT_ELEMENTS: TTextElement[] = ['p', 'span'];

const DEFAULT_TEXT_ELEMENT: TTextElement = 'p';

const TEXT_WEIGHTS: TTextWeight[] = ['regular', 'bold'];

const DEFAULT_TEXT_WEIGHT: TTextWeight = 'regular';

export {
    TEXT_SIZES,
    DEFAULT_TEXT_SIZE,
    TEXT_ELEMENTS,
    DEFAULT_TEXT_ELEMENT,
    TEXT_WEIGHTS,
    DEFAULT_TEXT_WEIGHT,
    TYPOGRAPHY_MARGINS as TEXT_MARGINS,
    DEFAULT_TYPOGRAPHY_MARGIN as DEFAULT_TEXT_MARGIN,
    TYPOGRAPHY_COLORS as TEXT_COLORS,
    DEFAULT_TYPOGRAPHY_COLOR as DEFAULT_TEXT_COLOR,
};
