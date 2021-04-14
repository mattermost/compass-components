import {
    TShapeBorderRadius,
    TShapeElevationDefinitions,
    TShapeElevationLevel,
} from './Shape.types';

const SHAPE_BORDER_RADII: TShapeBorderRadius[] = [0, 4, 8, 12, 16, 20, 24, 'circle', 'pill'];

const DEFAULT_SHAPE_BORDER_RADIUS: TShapeBorderRadius = 4;

const SHAPE_ELEVATION_LEVELS: TShapeElevationLevel[] = [0, 1, 2, 3, 4, 5, 6];

const DEFAULT_SHAPE_ELEVATION_LEVEL: TShapeElevationLevel = 0;

// --elevation-shadow-1: 0 2px 3px 0 rgba(0, 0, 0, ${getElevationOpacity});
// --elevation-shadow-2: 0 4px 6px 0 rgba(0, 0, 0, ${getElevationOpacity});
// --elevation-shadow-3: 0 6px 14px 0 rgba(0, 0, 0, ${getElevationOpacity});
// --elevation-shadow-4: 0 8px 24px 0 rgba(0, 0, 0, ${getElevationOpacity});
// --elevation-shadow-5: 0 12px 32px 0 rgba(0, 0, 0, ${getElevationOpacity});
// --elevation-shadow-6: 0 20px 32px 0 rgba(0, 0, 0, ${getElevationOpacity});

const SHAPE_ELEVATION_DEFINITIONS: TShapeElevationDefinitions = {
    0: { y: 0, blur: 0 },
    1: { y: 2, blur: 3 },
    2: { y: 4, blur: 6 },
    3: { y: 6, blur: 14 },
    4: { y: 8, blur: 24 },
    5: { y: 12, blur: 32 },
    6: { y: 20, blur: 32 },
};

export {
    SHAPE_BORDER_RADII,
    DEFAULT_SHAPE_BORDER_RADIUS,
    SHAPE_ELEVATION_LEVELS,
    DEFAULT_SHAPE_ELEVATION_LEVEL,
    SHAPE_ELEVATION_DEFINITIONS,
};
