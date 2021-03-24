import React from 'react';
import clsx from 'clsx';

import Type, { TTypeWeight } from '../../foundations/type';

import { PText } from './Text.props';
import {
    DEFAULT_TEXT_COLOR,
    DEFAULT_TEXT_MARGIN,
    DEFAULT_TEXT_SIZE,
    DEFAULT_TEXT_ELEMENT,
    DEFAULT_TEXT_WEIGHT,
} from './Text.constants';

const Text: React.FC<PText> = ({
    children,
    className,
    size = DEFAULT_TEXT_SIZE,
    element = DEFAULT_TEXT_ELEMENT,
    weight = DEFAULT_TEXT_WEIGHT,
    margin = DEFAULT_TEXT_MARGIN,
    color = DEFAULT_TEXT_COLOR,
}): JSX.Element => (
    <Type
        className={clsx(className, 'Text')}
        element={element}
        size={size}
        margin={margin}
        color={color}
        weight={weight as TTypeWeight}
        role={'text'}
    >
        {children}
    </Type>
);

export default Text;
