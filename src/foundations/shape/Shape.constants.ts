import { DEFAULT_ELEVATION_LEVEL } from '../../utilities/elevation';

import { TShapeBorderRadius, TShapeElement } from './Shape.types';

const SHAPE_BORDER_RADII: TShapeBorderRadius[] = [0, 2, 4, 8, 12, 16, 20, 24, 'circle', 'pill'];

const DEFAULT_SHAPE_BORDER_RADIUS: TShapeBorderRadius = 4;

const SHAPE_ELEMENTS: TShapeElement[] = ['div', 'span', 'section', 'aside', 'button'];

const DEFAULT_SHAPE_ELEMENT: TShapeElement = 'div';

export {
    DEFAULT_ELEVATION_LEVEL as DEFAULT_SHAPE_ELEVATION_LEVEL,
    SHAPE_BORDER_RADII,
    DEFAULT_SHAPE_BORDER_RADIUS,
    SHAPE_ELEMENTS,
    DEFAULT_SHAPE_ELEMENT,
};
