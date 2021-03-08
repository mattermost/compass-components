import React from 'react';

import { isValidColor } from '../../utils';

import StyledShape, { PStyledShape } from './Shape.styles';
import { TBorderRadiusSizes, TElevationLevel } from './Shape.types';

type PShape = {
    /** The border-radius size */
    borderRadius?: TBorderRadiusSizes;
    /** Should a border be rendered */
    border?: boolean;
    /**
     * Elevation refers to the z-index depth that an element sits on.
     * The base Elevation is 0 and has no depth.
     * Subsequent layers increment this Elevation value.
     * In total, there are 6 Elevation levels, not including the base level 0.
     * */
    elevation?: TElevationLevel;
    /** If a hover-state should require a higher (or lower) elevation */
    elevationOnHover: TElevationLevel;
    /** Which component should be used for rendering the Shape */
    component?: 'div' | 'span' | 'section' | 'aside';
    /** set a custom width */
    width?: number | string | 'auto';
    /**
     * set a custom height. When `borderRadius` is set to `'circle'`,
     * `height` will be set from `width`
     * */
    height?: number | string | 'auto';
    /** set a custom padding */
    padding?: number | number[];
    /** set a custom background color */
    background?: string;
    children?: React.ReactNode | React.ReactNode[];
};

const Shape: React.FC<PShape> = ({
    border = false,
    borderRadius = 0,
    component = 'div',
    elevation = 0,
    elevationOnHover = elevation,
    background = '#FFF',
    width = 'auto',
    height = 'auto',
    padding = 0,
    children,
}: PShape): JSX.Element => {
    const styledShapeProperties: PStyledShape = {
        border,
        borderRadius,
        elevation,
        elevationOnHover,
        width: 'auto',
        height: 'auto',
        padding: 'initial',
        background: 'white',
    };

    if (borderRadius === 'circle' && width) {
        styledShapeProperties.width = typeof width === 'number' ? `${width}px` : width;
        styledShapeProperties.height = typeof width === 'number' ? `${width}px` : width;
    } else {
        if (width) {
            styledShapeProperties.width = typeof width === 'number' ? `${width}px` : width;
        }

        if (height) {
            styledShapeProperties.height = typeof height === 'number' ? `${height}px` : height;
        }
    }

    if (padding) {
        if (Array.isArray(padding)) {
            styledShapeProperties.padding = padding
                .slice(0, 4)
                .map(s => `${s}px`)
                .join(' ');
        } else {
            styledShapeProperties.padding = `${padding}px`;
        }
    }

    if (background && isValidColor(background)) {
        styledShapeProperties.background = background;
    }

    return (
        <StyledShape as={component} {...styledShapeProperties}>
            {children}
        </StyledShape>
    );
};

export default Shape;
export type { PShape };
