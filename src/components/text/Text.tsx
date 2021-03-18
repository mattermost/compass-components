import React from 'react';
import clsx from 'clsx';

import Type, { TTypeSize, TTypeWeight } from '../../foundations/type';

import { PText } from './Text.props';
import { DEFAULT_TEXT_SIZE } from './Text.constants';

const Text: React.FC<PText> = ({
    children,
    className,
    size = DEFAULT_TEXT_SIZE,
    variant = 'p',
    weight = 'regular',
}): JSX.Element => (
    <Type
        className={clsx(className, 'Text')}
        variant={variant}
        size={size as TTypeSize}
        weight={weight as TTypeWeight}
        type="body"
    >
        {children}
    </Type>
);

export default Text;
