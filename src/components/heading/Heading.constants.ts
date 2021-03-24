import {
    TTypographySize,
    TTypographyWeight,
    TTypographyHeadingElement,
    HEADING_SIZES,
    TYPOGRAPHY_WEIGHTS,
    TYPOGRAPHY_MARGINS,
    TYPOGRAPHY_COLORS,
    DEFAULT_TYPOGRAPHY_COLOR,
    DEFAULT_TYPOGRAPHY_MARGIN,
} from '../../foundations/typography';

import { THeadingElement } from './Heading.types';

const DEFAULT_HEADING_SIZE: TTypographySize = 100;

const DEFAULT_HEADING_SIZEMAP: Record<TTypographyHeadingElement, TTypographySize> = {
    h1: 800,
    h2: 700,
    h3: 600,
    h4: 500,
    h5: 400,
    h6: 300,
};

const HEADING_ELEMENTS: THeadingElement[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const DEFAULT_HEADING_ELEMENT: THeadingElement = 'h6';

const DEFAULT_HEADING_WEIGHT: TTypographyWeight = 'bold';

export {
    HEADING_SIZES,
    DEFAULT_HEADING_SIZE,
    DEFAULT_HEADING_SIZEMAP,
    HEADING_ELEMENTS,
    DEFAULT_HEADING_ELEMENT,
    TYPOGRAPHY_WEIGHTS as HEADING_WEIGHTS,
    DEFAULT_HEADING_WEIGHT,
    TYPOGRAPHY_MARGINS as HEADING_MARGINS,
    DEFAULT_TYPOGRAPHY_MARGIN as DEFAULT_HEADING_MARGIN,
    TYPOGRAPHY_COLORS as HEADING_COLORS,
    DEFAULT_TYPOGRAPHY_COLOR as DEFAULT_HEADING_COLOR,
};
