import React from 'react';
import clsx from 'clsx';

import Type, { TTypeWeight } from '../../foundations/type';

import { PText } from './Text.props';
import {
    DEFAULT_TEXT_COLOR,
    DEFAULT_TEXT_GUTTER,
    DEFAULT_TEXT_SIZE,
    DEFAULT_TEXT_VARIANT,
    DEFAULT_TEXT_WEIGHT,
} from './Text.constants';

const Text: React.FC<PText> = ({
    children,
    className,
    size = DEFAULT_TEXT_SIZE,
    variant = DEFAULT_TEXT_VARIANT,
    weight = DEFAULT_TEXT_WEIGHT,
    gutter = DEFAULT_TEXT_GUTTER,
    color = DEFAULT_TEXT_COLOR,
}): JSX.Element => (
    <Type
        className={clsx(className, 'Text')}
        as={variant}
        variant={variant}
        size={size}
        gutter={gutter}
        color={color}
        weight={weight as TTypeWeight}
    >
        {children}
    </Type>
);

export default Text;
