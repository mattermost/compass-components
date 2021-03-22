import React from 'react';
import clsx from 'clsx';

import Type from '../../foundations/type/Type';

import {
    DEFAULT_HEADING_COLOR,
    DEFAULT_HEADING_GUTTER,
    DEFAULT_HEADING_SIZE,
    DEFAULT_HEADING_VARIANT,
    DEFAULT_HEADING_WEIGHT,
} from './Heading.constants';
import { PHeading } from './Heading.props';

const Heading: React.FC<PHeading> = ({
    size = DEFAULT_HEADING_SIZE,
    variant = DEFAULT_HEADING_VARIANT,
    weight = DEFAULT_HEADING_WEIGHT,
    color = DEFAULT_HEADING_COLOR,
    gutter = DEFAULT_HEADING_GUTTER,
    children,
    className,
}): JSX.Element => {
    let element = variant;

    // set the default variant based on the defined size of variant if not defined
    if (!variant) {
        switch (true) {
            case size === 400:
                element = 'h5';
                break;
            case size === 500:
                element = 'h4';
                break;
            case size === 600:
                element = 'h3';
                break;
            case size === 700:
                element = 'h2';
                break;
            case size >= 800:
                element = 'h1';
                break;
            default:
                element = 'h6';
        }
    }

    return (
        <Type
            className={clsx(className, 'Heading')}
            variant={element}
            as={element}
            size={size}
            weight={weight}
            gutter={gutter}
            color={color}
        >
            {children}
        </Type>
    );
};

export default Heading;
