import React from 'react';

import { TBorderRadiusSizes, TElevationLevel } from './Shape.types';

type PShape = {
    /** The border-radius size */
    borderRadius?: TBorderRadiusSizes;
    /** Color of the border (default: `var(--default-border-color)`) */
    borderColor?: string;
    /** Width of the border (default: `0`) */
    borderWidth?: number;
    /**
     * Elevation refers to the z-index depth that an element sits on.
     * The base Elevation is 0 and has no depth.
     * Subsequent layers increment this Elevation value.
     * In total, there are 6 Elevation levels, not including the base level 0.
     * */
    elevation?: TElevationLevel;
    /** If a hover-state should require a higher (or lower) elevation */
    elevationOnHover?: TElevationLevel;
    /** Which component should be used for rendering the Shape */
    component?: 'div' | 'span' | 'section' | 'aside' | 'button';
    /** set a custom width */
    width?: number | string | 'auto';
    /**
     * set a custom height. When `borderRadius` is set to `'circle'`,
     * `height` will be set from `width`
     * */
    height?: number | string | 'auto';
    /** set a custom background color */
    background?: string;
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export default PShape;
