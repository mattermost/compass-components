import React from 'react';
import clsx from 'clsx';

import Type from '../../foundations/type/Type';

import { PHeading } from './Heading.props';

const Heading: React.FC<PHeading> = ({
    size = 100,
    variant = 'h6',
    weight = 'bold',
    color = 'primary',
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
            color={color}
        >
            {children}
        </Type>
    );
};

export default Heading;
