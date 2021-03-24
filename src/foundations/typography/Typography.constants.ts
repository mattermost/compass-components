import {
    TTypographyBodySize,
    TTypographyElement,
    TTypographySize,
    TTypographyWeight,
    TTypographyMargin,
    TTypographyColor,
} from './Typography.types';

const DEFAULT_TYPOGRAPHY_SIZE: TTypographySize = 100;

const BODY_SIZES: TTypographyBodySize[] = [25, 50, 75, 100, 200, 300];

const HEADING_SIZES: TTypographySize[] = [25, 50, 75, 100, 200, 300, 400, 500, 600, 700, 1000];

const BODY_ELEMENTS: TTypographyElement[] = ['p', 'span', 'label'];

const HEADING_ELEMENTS: TTypographyElement[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const TYPOGRAPHY_WEIGHTS: TTypographyWeight[] = ['light', 'regular', 'bold'];

const TYPOGRAPHY_MARGINS: TTypographyMargin[] = ['none', 'both', 'bottom', 'top'];

const DEFAULT_TYPOGRAPHY_MARGIN: TTypographyMargin = 'both';

const TYPOGRAPHY_COLORS: TTypographyColor[] = ['primary', 'secondary', 'disabled'];

const DEFAULT_TYPOGRAPHY_COLOR: TTypographyColor = 'primary';

export {
    DEFAULT_TYPOGRAPHY_SIZE,
    BODY_SIZES,
    HEADING_SIZES,
    BODY_ELEMENTS,
    HEADING_ELEMENTS,
    TYPOGRAPHY_WEIGHTS,
    TYPOGRAPHY_MARGINS,
    DEFAULT_TYPOGRAPHY_MARGIN,
    TYPOGRAPHY_COLORS,
    DEFAULT_TYPOGRAPHY_COLOR,
};
