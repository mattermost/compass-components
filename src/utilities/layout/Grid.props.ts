import React from 'react';

import { TSpacingDefinition } from '../spacing';

import { TGridAlignment, TGridElement, TGridFlex, TGridJustify } from './Grid.types';

type PGrid = {
    /**
     * flex value to use
     * @default 'initial'
     */
    flex?: TGridFlex;
    /**
     * renders the `Grid` component as a row (`flex-direction: row`)
     * @default false
     */
    row?: boolean;
    /**
     * wrap content?
     * @default false
     */
    wrap?: boolean;
    /**
     * the HTML tag that is used to render the component
     * @default 'div'
     */
    element?: TGridElement;
    /**
     * defines the vertical alignment of items inside the component
     * @default 'start'
     */
    alignment?: TGridAlignment;
    /**
     * defines the horizontal alignment of items inside the component
     * @default 'start'
     */
    justify?: TGridJustify;
    /**
     * padding according to `TSpacingDefinition` typography
     */
    padding?: TSpacingDefinition;
    /**
     * margin according to `TSpacingDefinition` typography
     */
    margin?: TSpacingDefinition;
    /**
     * restrict the width of a `Grid`
     */
    width?: number;
    /**
     * restrict the height of a `Grid`
     */
    height?: number;
    /**
     * custom className
     */
    className?: string;
    children?: React.ReactNode;
};

export type PGridRoot = Required<
    Omit<PGrid, 'className' | 'children' | 'width' | 'height' | 'padding' | 'margin'>
> &
    Pick<PGrid, 'width' | 'height' | 'padding' | 'margin'>;

export default PGrid;
