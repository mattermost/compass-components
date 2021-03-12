import React from 'react';

import StyledGrid from './Grid.styles';
import { TSpacing } from './Spacing';

type PGrid = {
    row?: boolean;
    flex?: number;
    component?: 'div' | 'span' | 'section' | 'aside';
    alignment?: 'start' | 'center' | 'end' | 'stretch';
    justify?:
        | 'start'
        | 'center'
        | 'end'
        | 'stretch'
        | 'space-around'
        | 'space-between'
        | 'space-evenly';
    padding?: TSpacing;
    margin?: TSpacing;
    children?: React.ReactNode;
};

const Grid: React.FC<PGrid> = ({
    row = false,
    component = 'div',
    alignment = 'start',
    justify = 'start',
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

export default Grid;

export type { PGrid };
