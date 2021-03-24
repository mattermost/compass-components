import React from 'react';
import clsx from 'clsx';

import Typography from '../../foundations/typography/Typography';

import { THeadingElement } from './Heading.types';
import {
    DEFAULT_HEADING_COLOR,
    DEFAULT_HEADING_MARGIN,
    DEFAULT_HEADING_SIZE,
    DEFAULT_HEADING_ELEMENT,
    DEFAULT_HEADING_WEIGHT,
    HEADING_ELEMENTS,
} from './Heading.constants';
import { PHeading } from './Heading.props';

const Heading: React.FC<PHeading> = ({
    size = DEFAULT_HEADING_SIZE,
    element = DEFAULT_HEADING_ELEMENT,
    weight = DEFAULT_HEADING_WEIGHT,
    color = DEFAULT_HEADING_COLOR,
    margin = DEFAULT_HEADING_MARGIN,
    children,
    className,
}): JSX.Element => {
    // Whenever this component is used with an element that is not supported within the headings throw an error!
    if (!HEADING_ELEMENTS.includes(element)) {
        throw new Error(
            `Compass Components: Heading component was used with an unsupported element '${element}'.
            Please provide an element from these available options: ${HEADING_ELEMENTS.join(', ')}.`
        );
    }

    let derivedElement: THeadingElement = element;

    // set the default element based on the defined size of element if not defined
    if (!element) {
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
            element={element || derivedElement}
            size={size}
            weight={weight}
            margin={margin}
            color={color}
            variant={'heading'}
        >
            {children}
        </Typography>
    );
};

export default Heading;
