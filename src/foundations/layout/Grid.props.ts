import React from 'react';

import { TSpacingDefinition } from './Grid.types';

type PGrid = {
    /** renders the `Grid` component as a row (`flex-direction: row`) */
    row?: boolean;
    /** flex value to use */
    flex?: number;
    /** the HTML tag that is used to render the component */
    component?: 'div' | 'span' | 'section' | 'aside';
    /** defines the vertical alignment of items inside the component */
    alignment?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    /** defines the horizontal alignment of items inside the component */
    justify?:
        | 'flex-start'
        | 'center'
        | 'flex-end'
        | 'stretch'
        | 'space-around'
        | 'space-between'
        | 'space-evenly';
    /** padding according to `TSpacingDefinition` type */
    padding?: TSpacingDefinition;
    /** margin according to `TSpacingDefinition` type */
    margin?: TSpacingDefinition;
    children?: React.ReactNode;
};

type PStyledGrid = Required<Omit<PGrid, 'component' | 'children' | 'margin' | 'padding'>> &
    Pick<PGrid, 'margin' | 'padding'>;

export type { PGrid, PStyledGrid };
