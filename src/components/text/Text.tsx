import React from 'react';
import clsx from 'clsx';

import Type, { TTypeWeight } from '../../foundations/type';

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
        as={variant}
        size={size}
        weight={weight as TTypeWeight}
    >
        {children}
    </Type>
);

export default Text;
