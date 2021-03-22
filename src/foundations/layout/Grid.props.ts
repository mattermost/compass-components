import React from 'react';

import { TSpacingDefinition } from './Grid.types';

type PGrid = {
    /** renders the `Grid` component as a row (`flex-direction: row`) */
    row?: boolean;
    /** flex value to use */
    flex?: number | 'auto';
    /** wrap content? */
    wrap?: boolean;
    /** the HTML tag that is used to render the component */
    component?: 'div' | 'span' | 'section' | 'aside';
    /** defines the vertical alignment of items inside the component */
    alignment?: 'initial' | 'flex-start' | 'center' | 'flex-end' | 'stretch';
    /** defines the horizontal alignment of items inside the component */
    justify?:
        | 'initial'
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
    /** restrict the width of a `Grid` */
    width?: number | null;
    /** restrict the height of a `Grid` */
    height?: number | null;
    children?: React.ReactNode;
};

type PStyledGrid = Required<Omit<PGrid, 'component' | 'children' | 'margin' | 'padding'>> &
    Pick<PGrid, 'margin' | 'padding'>;

export type { PGrid, PStyledGrid };
