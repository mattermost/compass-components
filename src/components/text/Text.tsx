import React from 'react';

import Type, { TTypeSize, TTypeWeight } from '../../foundations/type';

import PText from './Text.props';

const Text: React.FC<PText> = ({
    children,
    size = 100,
    variant = 'p',
    weight = 'regular',
}): JSX.Element => (
    <Type
        className="Text"
        variant={variant}
        size={size as TTypeSize}
        weight={weight as TTypeWeight}
        type="body"
    >
        {children}
    </Type>
);

export default Text;
