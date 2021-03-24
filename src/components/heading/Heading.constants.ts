import {
    TTypeSize,
    TTypeWeight,
    HEADING_SIZES,
    TYPE_WEIGHTS,
    TYPE_MARGINS,
    TYPE_COLORS,
    DEFAULT_TYPE_COLOR,
    DEFAULT_TYPE_MARGIN,
} from '../../foundations/type';

import { THeadingElement } from './Heading.types';

const DEFAULT_HEADING_SIZE: TTypeSize = 100;

const HEADING_ELEMENTS: THeadingElement[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const DEFAULT_HEADING_ELEMENT: THeadingElement = 'h6';

const DEFAULT_HEADING_WEIGHT: TTypeWeight = 'bold';

export {
    HEADING_SIZES,
    DEFAULT_HEADING_SIZE,
    HEADING_ELEMENTS,
    DEFAULT_HEADING_ELEMENT,
    TYPE_WEIGHTS as HEADING_WEIGHTS,
    DEFAULT_HEADING_WEIGHT,
    TYPE_MARGINS as HEADING_MARGINS,
    DEFAULT_TYPE_MARGIN as DEFAULT_HEADING_MARGIN,
    TYPE_COLORS as HEADING_COLORS,
    DEFAULT_TYPE_COLOR as DEFAULT_HEADING_COLOR,
};
