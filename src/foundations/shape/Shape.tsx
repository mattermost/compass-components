import React from 'react';

import { Utils } from '../../shared';
import { DEFAULT_ELEVATION_LEVEL } from '../../utilities/elevation';

import ShapeRoot from './Shape.root';
import PShape from './Shape.props';
import {
    DEFAULT_SHAPE_BORDER_RADIUS,
    DEFAULT_SHAPE_ELEMENT,
    SHAPE_ELEMENTS,
} from './Shape.constants';

const Shape = ({
    element = DEFAULT_SHAPE_ELEMENT,
    radius = DEFAULT_SHAPE_BORDER_RADIUS,
    elevation = DEFAULT_ELEVATION_LEVEL,
    elevationOnHover,
    ...rest
}: PShape): JSX.Element => {
    Utils.assert(
        SHAPE_ELEMENTS.includes(element),
        `Compass Components - Shape: used element is unsupported. Please use one supported by the component from this list: ${SHAPE_ELEMENTS.join(
            ', '
        )}`,
        true
    );

    const rootProperties = {
        radius,
        elevation,
        elevationOnHover,
    };

    return <ShapeRoot as={element} {...rootProperties} {...rest} />;
};

export default Shape;
