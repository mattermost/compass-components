import React from 'react';

import { Utils } from '../../shared';

import {
    DEFAULT_HEADING_COLOR,
    DEFAULT_HEADING_ELEMENT,
    DEFAULT_HEADING_MARGIN,
    DEFAULT_HEADING_SIZE,
    DEFAULT_HEADING_WEIGHT,
    HEADING_ELEMENTS,
} from './Heading.constants';
import PHeading from './Heading.props';
import HeadingRoot from './Heading.root';

const Heading = ({
    inheritLineHeight = false,
    color = DEFAULT_HEADING_COLOR,
    element = DEFAULT_HEADING_ELEMENT,
    margin = DEFAULT_HEADING_MARGIN,
    size = DEFAULT_HEADING_SIZE,
    weight = DEFAULT_HEADING_WEIGHT,
    ...rest
}: PHeading): JSX.Element => {
    // Whenever this component is used with an element that is not supported within the headings throw an error!
    Utils.assert(
        HEADING_ELEMENTS.includes(element),
        `Heading: component was used with an unsupported element '${element}'.
                Please provide one from these available options: ${HEADING_ELEMENTS.join(', ')}.`
    );

    const rootProperties = {
        inheritLineHeight,
        color,
        margin,
        size,
        weight,
        ...rest,
    };

    return <HeadingRoot as={element} {...rootProperties} />;
};

export default Heading;
