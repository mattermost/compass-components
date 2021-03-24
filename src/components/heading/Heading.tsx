import React from 'react';
import clsx from 'clsx';

import Type from '../../foundations/type/Type';

import { THeadingElement } from './Heading.types';
import {
    DEFAULT_HEADING_COLOR,
    DEFAULT_HEADING_MARGIN,
    DEFAULT_HEADING_SIZE,
    DEFAULT_HEADING_ELEMENT,
    DEFAULT_HEADING_WEIGHT,
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
    let derivedElement: THeadingElement | undefined = element;

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
        <Type
            className={clsx(className, 'Heading')}
            element={element || derivedElement}
            size={size}
            weight={weight}
            margin={margin}
            color={color}
            role={'heading'}
        >
            {children}
        </Type>
    );
};

export default Heading;
