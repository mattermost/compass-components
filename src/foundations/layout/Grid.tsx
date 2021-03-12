import React from 'react';

import { PGrid } from './Grid.props';
import StyledGrid from './Grid.styles';

const Grid: React.FC<PGrid> = ({
    row = false,
    component = 'div',
    alignment = 'flex-start',
    justify = 'flex-start',
    flex = 0,
    children,
    ...rest
}: PGrid): JSX.Element => {
    const optionalProperties = {
        row,
        flex,
        alignment,
        justify,
    };

    return (
        <StyledGrid as={component} {...optionalProperties} {...rest}>
            {children}
        </StyledGrid>
    );
};

export type { PGrid };

export default Grid;
