import { Utils } from '../../shared';

import ShapeRoot from './Shape.root';
import { PShape } from './Shape.props';
import {
    DEFAULT_SHAPE_BORDER_RADIUS,
    DEFAULT_SHAPE_ELEMENT,
    DEFAULT_SHAPE_ELEVATION_LEVEL,
    SHAPE_ELEMENTS,
} from './Shape.constants';

const Shape = ({
    element = DEFAULT_SHAPE_ELEMENT,
    radius = DEFAULT_SHAPE_BORDER_RADIUS,
    elevation = DEFAULT_SHAPE_ELEVATION_LEVEL,
    elevationOnHover = elevation,
    ...rest
}: PShape): JSX.Element => {
    Utils.assert(
        SHAPE_ELEMENTS.includes(element),
        `Compass Components - Shape: used element is unsupported. Please use one supported by the component from this list: ${SHAPE_ELEMENTS.join(
            ', '
        )}`,
        true
    );

    const defaultProps = {
        radius,
        elevation,
        elevationOnHover,
    };

    return <ShapeRoot as={element} {...defaultProps} {...rest} />;
};

export default Shape;
