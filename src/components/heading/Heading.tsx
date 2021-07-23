import React from 'react';

import { Utils } from '../../shared';

import {
    DEFAULT_HEADING_COLOR,
    DEFAULT_HEADING_ELEMENT,
    DEFAULT_HEADING_MARGIN,
    DEFAULT_HEADING_SIZE,
    DEFAULT_HEADING_WEIGHT,
    HEADING_COLORS,
    HEADING_ELEMENTS,
    HEADING_MARGINS,
    HEADING_SIZES,
    HEADING_WEIGHTS,
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
        HEADING_ELEMENTS.includes(element) || React.isValidElement(element),
        `Compass Components: Heading component was used with an unsupported element '${element}'.
                Please provide one from these available options: ${HEADING_ELEMENTS.join(
                    ', '
                )}, or a valid \`ReactElement\`.`
    );

    Utils.assert(
        HEADING_COLORS.includes(color) || Utils.isColor(color),
        `Compass Components - Heading: component was used with an unsupported color '${color}'.
            Please provide one from these available options: ${HEADING_COLORS.join(
                ', '
            )}, or a valid CSS color value`,
        true
    );

    Utils.assert(
        HEADING_SIZES.includes(size),
        `Compass Components - Heading: component was used with an unsupported size '${size}'.
            Please provide one from these available options: ${HEADING_SIZES.join(', ')}.`,
        true
    );

    Utils.assert(
        HEADING_MARGINS.includes(margin),
        `Compass Components - Heading: component was used with an unsupported margin '${margin}'.
            Please provide one from these available options: ${HEADING_MARGINS.join(', ')}.`,
        true
    );

    Utils.assert(
        HEADING_WEIGHTS.includes(weight),
        `Compass Components - Heading: component was used with an unsupported weight '${weight}'.
            Please provide one from these available options: ${HEADING_WEIGHTS.join(', ')}.`,
        true
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
