import React from 'react';

import { isValidColor } from '../../utils';

import StyledShape from './Shape.styles';
import { PShape, PStyledShape } from './Shape.props';

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
        background: 'none',
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
