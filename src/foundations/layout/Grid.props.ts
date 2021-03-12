import React from 'react';

import { TSpacing } from './Grid.types';

type PGrid = {
    row?: boolean;
    flex?: number;
    component?: 'div' | 'span' | 'section' | 'aside';
    alignment?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    justify?:
        | 'flex-start'
        | 'center'
        | 'flex-end'
        | 'stretch'
        | 'space-around'
        | 'space-between'
        | 'space-evenly';
    padding?: TSpacing;
    margin?: TSpacing;
    children?: React.ReactNode;
};

type PStyledGrid = Required<Omit<PGrid, 'component' | 'children' | 'margin' | 'padding'>> &
    Pick<PGrid, 'margin' | 'padding'>;

export type { PGrid, PStyledGrid };
