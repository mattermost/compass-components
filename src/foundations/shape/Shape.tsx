import React from 'react';

import StyledShape from './Shape.styles';
import { PShape, PStyledShape } from './Shape.props';

const Shape: React.FC<PShape> = ({
    component = 'div',
    border = false,
    borderRadius = 0,
    elevation = 0,
    elevationOnHover = elevation,
    background = 'var(--shape-background-color)',
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
        background,
        width: 'auto',
        height: 'auto',
        padding: 'initial',
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
                .map((s) => `${s}px`)
                .join(' ');
        } else {
            styledShapeProperties.padding = `${padding}px`;
        }
    }

    return (
        <StyledShape as={component} {...styledShapeProperties}>
            {children}
        </StyledShape>
    );
};

export default Shape;
