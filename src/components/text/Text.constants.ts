import {
    TYPOGRAPHY_MARGINS,
    TYPOGRAPHY_COLORS,
    TYPOGRAPHY_WEIGHTS,
    DEFAULT_TYPOGRAPHY_MARGIN,
    TTypographyWeight,
} from '../../foundations/typography';

import { TTextSize, TTextElement } from './Text.types';

const TEXT_SIZES: TTextSize[] = [25, 50, 75, 100, 200, 300];

const DEFAULT_TEXT_SIZE: TTextSize = 100;

const TEXT_ELEMENTS: TTextElement[] = ['p', 'span'];

const DEFAULT_TEXT_ELEMENT: TTextElement = 'p';

const DEFAULT_TEXT_WEIGHT: TTypographyWeight = 'regular';

export {
    TEXT_SIZES,
    DEFAULT_TEXT_SIZE,
    TEXT_ELEMENTS,
    DEFAULT_TEXT_ELEMENT,
    TYPOGRAPHY_WEIGHTS as TEXT_WEIGHTS,
    DEFAULT_TEXT_WEIGHT,
    TYPOGRAPHY_MARGINS as TEXT_MARGINS,
    DEFAULT_TYPOGRAPHY_MARGIN as DEFAULT_TEXT_MARGIN,
    TYPOGRAPHY_COLORS as TEXT_COLORS,
};
