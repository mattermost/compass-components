import {
    TBodySize,
    TTypeElement,
    TTypeSize,
    TTypeWeight,
    TTypeMargin,
    TTypeColor,
} from './Type.types';

const DEFAULT_TYPE_SIZE: TTypeSize = 100;

const BODY_SIZES: TBodySize[] = [25, 50, 75, 100, 200, 300];

const HEADING_SIZES: TTypeSize[] = [25, 50, 75, 100, 200, 300, 400, 500, 600, 700, 1000];

const HEADING_ELEMENTS: TTypeElement[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const TYPE_WEIGHTS: TTypeWeight[] = ['light', 'regular', 'bold'];

const TYPE_MARGINS: TTypeMargin[] = ['none', 'both', 'bottom', 'top'];

const DEFAULT_TYPE_MARGIN: TTypeMargin = 'both';

const TYPE_COLORS: TTypeColor[] = ['primary', 'secondary', 'disabled'];

const DEFAULT_TYPE_COLOR: TTypeColor = 'primary';

export {
    DEFAULT_TYPE_SIZE,
    BODY_SIZES,
    HEADING_SIZES,
    TYPE_WEIGHTS,
    TYPE_MARGINS,
    DEFAULT_TYPE_MARGIN,
    TYPE_COLORS,
    DEFAULT_TYPE_COLOR,
    HEADING_ELEMENTS,
};
