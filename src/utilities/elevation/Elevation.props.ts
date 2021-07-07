import { TElevationLevel } from './Elevation.types';

type PElevation = {
    /**
     * Elevation refers to the z-index depth that an element sits on.
     * The base Elevation is 0 and has no depth.
     * Subsequent layers increment this Elevation value.
     * In total, there are 6 Elevation levels, not including the base level 0.
     * @default 0
     * */
    elevation?: TElevationLevel;
    /**
     * If a hover-state should require a higher (or lower) elevation
     * @default elevation
     * */
    elevationOnHover?: TElevationLevel;
};

export default PElevation;
