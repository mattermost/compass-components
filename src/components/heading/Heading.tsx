import React from 'react';
import clsx from 'clsx';

import Typography from '../../foundations/typography';

import {
    DEFAULT_HEADING_MARGIN,
    DEFAULT_HEADING_SIZE,
    DEFAULT_HEADING_WEIGHT,
    HEADING_ELEMENTS,
} from './Heading.constants';
import { PHeading } from './Heading.props';

const Heading: React.FC<PHeading> = ({
    children,
    className,
    element,
    color,
    margin = DEFAULT_HEADING_MARGIN,
    size = DEFAULT_HEADING_SIZE,
    weight = DEFAULT_HEADING_WEIGHT,
}): JSX.Element => {
    // Whenever this component is used with an element that is not supported within the headings throw an error!
    if (element && !HEADING_ELEMENTS.includes(element)) {
        throw new Error(
            `Compass Components: Heading component was used with an unsupported element '${element}'.
            Please provide an element from these available options: ${HEADING_ELEMENTS.join(', ')}.`
        );
    }

    // set the default element based on the defined component size if element is not defined
    let derivedElement = element;

    if (!derivedElement) {
        switch (true) {
            case size === 400:
                derivedElement = 'h5';
                break;
            case size === 500:
                derivedElement = 'h4';
                break;
            case size === 600:
                derivedElement = 'h3';
                break;
            case size === 700:
                derivedElement = 'h2';
                break;
            case size >= 800:
                derivedElement = 'h1';
                break;
            default:
                derivedElement = 'h6';
        }
    }

    return (
        <Typography
            className={clsx(className, 'Heading')}
            element={derivedElement}
            size={size}
            weight={weight}
            margin={margin}
            color={color}
        >
            {children}
        </Typography>
    );
};

export default Heading;
