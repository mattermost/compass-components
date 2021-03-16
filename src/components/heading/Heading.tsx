import React from 'react';

import Type from '../../foundations/type';

import { PHeading } from './Heading.props';

const Heading: React.FC<PHeading> = ({ children, size = 100, variant, weight }): JSX.Element => {
    let element = variant;

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
        <Type className="Heading" variant={element} size={size} weight={weight} type="heading">
            {children}
        </Type>
    );
};

export default Heading;
