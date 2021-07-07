import { TElevationLevel, TElevationDefinitions } from './Elevation.types';

const ELEVATION_LEVELS: TElevationLevel[] = [0, 1, 2, 3, 4, 5, 6];

const DEFAULT_ELEVATION_LEVEL: TElevationLevel = 0;

const ELEVATION_DEFINITIONS: TElevationDefinitions = {
    0: { offsetY: 0, blurRadius: 0 },
    1: { offsetY: 2, blurRadius: 3 },
    2: { offsetY: 4, blurRadius: 6 },
    3: { offsetY: 6, blurRadius: 14 },
    4: { offsetY: 8, blurRadius: 24 },
    5: { offsetY: 12, blurRadius: 32 },
    6: { offsetY: 20, blurRadius: 32 },
};

export { ELEVATION_LEVELS, DEFAULT_ELEVATION_LEVEL, ELEVATION_DEFINITIONS };
