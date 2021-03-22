import { TBodySize, TTypeVariant, TTypeSize, TTypeWeight } from './Type.types';

const BODY_SIZES: TBodySize[] = [25, 50, 75, 100, 200, 300];

const HEADING_SIZES: TTypeSize[] = [25, 50, 75, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const HEADING_VARIANTS: TTypeVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const TYPE_WEIGHTS: TTypeWeight[] = ['light', 'regular', 'bold'];

const DEFAULT_TYPE_SIZE: TTypeSize = 100;

export { BODY_SIZES, HEADING_SIZES, TYPE_WEIGHTS, DEFAULT_TYPE_SIZE, HEADING_VARIANTS };
