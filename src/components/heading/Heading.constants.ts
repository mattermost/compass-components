import {
    TTypeSize,
    HEADING_SIZES,
    TYPE_WEIGHTS,
    TYPE_GUTTERS,
    TYPE_COLORS,
} from '../../foundations/type';

import { THeadingVariant } from './Heading.types';

const DEFAULT_HEADING_SIZE: TTypeSize = 100;

const HEADING_VARIANTS: THeadingVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export {
    DEFAULT_HEADING_SIZE,
    HEADING_SIZES,
    HEADING_VARIANTS,
    TYPE_WEIGHTS as HEADING_WEIGHTS,
    TYPE_GUTTERS as HEADING_GUTTERS,
    TYPE_COLORS as HEADING_COLORS,
};
