import React from 'react';

import { PGrid } from './Grid.props';
import StyledGrid from './Grid.styles';

const Grid: React.FC<PGrid> = ({
    row = false,
    component = 'div',
    alignment = 'initial',
    justify = 'initial',
    flex = 'auto',
    wrap = true,
    width = null,
    height = null,
    children,
    ...rest
}: PGrid): JSX.Element => {
    const optionalProperties = {
        row,
        flex,
        wrap,
        alignment,
        justify,
        width,
        height,
    };

    return (
        <StyledGrid as={component} {...optionalProperties} {...rest}>
            {children}
        </StyledGrid>
    );
};

export type { PGrid };

export default Grid;
