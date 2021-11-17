import type React from 'react';
import type { Property } from 'csstype';

import type { PGlobals, PGlobalsLayout } from '../../shared/props';

import type {
    TGridGapProperty,
    TGridItemPlaceSelfProperty,
    TGridPlaceContentProperty,
    TGridPlaceItemsProperty,
} from './Grid.types';

type PGrid = PApplyGrid &
    PGlobals & {
        /**
         * the element the Grid should be rendered with
         */
        element?: string | React.FC;
    };

type PGridItem = PApplyGridItem &
    PGlobals & {
        /**
         * the element the Grid should be rendered with
         */
        element?: string | React.FC;
    };

type PApplyGrid = PGlobalsLayout & {
    /**
     * possible values align with the corresponding CSS property for
     * `grid-columns-template`
     * @default 'none'
     */
    columnsTemplate?: Property.GridTemplateColumns;
    /**
     * possible values align with the corresponding CSS property for
     * `grid-rows-template`
     * @default 'none'
     */
    rowsTemplate?: Property.GridTemplateRows;
    /**
     * possible values align with the corresponding CSS property for
     * `grid-areas-template`
     * @default 'none'
     */
    areasTemplate?: Property.GridTemplateAreas;
    /**
     * possible values align with the corresponding CSS property for
     * `column-gap` and `row-gap`
     *
     * It can be used with a gap definition (e.g. 'normal'), an integer to apply
     * the value (as px) to column and row gaps accordingly, or as object with
     * properties `column` and `row` to separate definitions for columns/rows
     *
     * @default 'normal'
     */
    gap?: TGridGapProperty;
    /**
     * possible values align with the corresponding CSS property for
     * `place-items`, `align-items` and `justify-items`
     *
     * It can be used with a valid value to apply to `align-items` and
     * `justify-items` accordingly, or as object with properties `alignItems`
     * and `justifyItems` to separate definitions
     *
     * @default 'initial'
     */
    placeItems?: TGridPlaceItemsProperty;
    /**
     * possible values align with the corresponding CSS property for
     * `place-content`, `align-content` and `justify-content`
     *
     * It can be used with a valid value to apply to `align-content` and
     * `justify-content` accordingly, or as object with properties
     * `alignContent` and `justifyContent` to separate definitions
     *
     * @default 'initial'
     */
    placeContent?: TGridPlaceContentProperty;
    onClick?: React.MouseEventHandler;
};

type PApplyGridItem = PGlobalsLayout & {
    /**
     * possible values align with the corresponding CSS property
     * `grid-column`
     *
     * the columns this item shall placed in.
     * Follows the longhand syntax for this property (e.g. `'1 / span 2'`).
     *
     * @default 'initial'
     */
    columns?: Property.GridColumn;
    /**
     * possible values align with the corresponding CSS property
     * `grid-row`
     *
     * the rows this item shall placed in.
     * Follows the shorthand syntax for the properties (e.g. `'1 / 2'`).
     *
     * @default 'initial'
     */
    rows?: Property.GridRow;
    /**
     * possible values align with the corresponding CSS property for
     * `place-self`, `align-self` and `justify-self`
     *
     * It can be used with a valid value to apply to `align-self` and
     * `justify-self` accordingly, or as object with properties `alignSelf`
     * and `justifySelf` to separate definitions
     *
     * @default 'initial'
     */
    placeSelf?: TGridItemPlaceSelfProperty;
    /**
     * possible values align with the corresponding CSS property
     * `grid-area`
     *
     * the area this item shall take. When a named area is defined pass in its
     * name as a string here. Can also be used as a shorthand syntax for the
     * properties `grid-column-start`, `grid-column-end`, `grid-row-start` and
     * `grid-row-end` (e.g. `'2 / span 4 / 1 / 3'`).
     */
    area?: Property.GridArea;
};

export type { PApplyGrid, PApplyGridItem, PGridItem };

export default PGrid;
