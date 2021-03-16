import React from 'react';
import clsx from 'clsx';

import StyledType from './Type.styles';
import { BASE_TYPE_SIZE, BASE_TYPE_TYPE } from './Type.constants';
import { PType, PStyledType } from './Type.props';

const Type: React.FC<PType> = ({
    className,
    children,
    variant,
    size = BASE_TYPE_SIZE,
    type = BASE_TYPE_TYPE,
    weight,
}): JSX.Element => {
    const styledTypeAttributes: PStyledType = {
        'data-size': size,
        'data-type': type,
    };

    if (weight) {
        styledTypeAttributes['data-weight'] = weight;
    }

    return (
        <StyledType
            as={variant as never}
            className={clsx(className, 'Type')}
            {...styledTypeAttributes}
        >
            {children}
        </StyledType>
    );
};

export default Type;
