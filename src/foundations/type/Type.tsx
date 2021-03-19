import React from 'react';
import clsx from 'clsx';

import StyledType from './Type.styles';
import { DEFAULT_TYPE_SIZE, DEFAULT_TYPE_TYPE } from './Type.constants';
import { PType } from './Type.props';

const Type: React.FC<PType> = ({
    className,
    children,
    variant,
    size = DEFAULT_TYPE_SIZE,
    type = DEFAULT_TYPE_TYPE,
    weight,
}): JSX.Element => (
    <StyledType
        as={variant as never}
        className={clsx(className, 'Type')}
        data-size={size}
        data-type={type}
        data-weight={weight}
    >
        {children}
    </StyledType>
);

export default Type;
