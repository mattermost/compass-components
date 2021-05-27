import React from 'react';

import { TShapeBorderRadius, TShapeElement, TShapeElevationLevel } from './Shape.types';

type PShape = {
    /**
     * The border-radius size
     * @default 0
     * */
    radius?: TShapeBorderRadius;
    /**
     * Elevation refers to the z-index depth that an element sits on.
     * The base Elevation is 0 and has no depth.
     * Subsequent layers increment this Elevation value.
     * In total, there are 6 Elevation levels, not including the base level 0.
     * @default 0
     * */
    elevation?: TShapeElevationLevel;
    /**
     * If a hover-state should require a higher (or lower) elevation
     * @default 0
     * */
    elevationOnHover?: TShapeElevationLevel;
    /**
     * Which component should be used for rendering the Shape
     * @default 'div'
     * */
    component?: TShapeElement;
    /**
     * If the component is an input, which type
     * @default 'text'
     * */
    type?: 'checkbox' | 'radio';
    /**
     * set a custom width
     * @default 'auto'
     * */
    width?: number | string | 'auto';
    /**
     * set a custom height. When `radius` is set to `'circle'`,
     * `height` will be set from `width`
     * @default 'auto'
     * */
    height?: number | string | 'auto';
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
    checked?: boolean;
};

type PApplyShape = Pick<PShape, 'width' | 'height' | 'radius'>;

type PApplyElevation = Required<Pick<PShape, 'elevation' | 'elevationOnHover'>>;

export type { PShape, PApplyShape, PApplyElevation };
