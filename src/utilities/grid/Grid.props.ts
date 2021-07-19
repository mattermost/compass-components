import React from 'react';
import { Property } from 'csstype';

import { TGridGapProperty, TGridPlaceContentProperty, TGridPlaceItemsProperty } from './Grid.types';

type PGrid = PApplyGrid & { element: string | React.FC };

type PGridItem = PApplyGridItem & { element: string | React.FC };

type PApplyGrid = {
    columnsTemplate?: Property.GridTemplateColumns;
    rowsTemplate?: Property.GridTemplateRows;
    areasTemplate?: Property.GridTemplateAreas;
    gap?: TGridGapProperty;
    placeItems?: TGridPlaceItemsProperty;
    placeContent?: TGridPlaceContentProperty;
};

type PApplyGridItem = {
    columns?: Property.GridColumn;
    rows?: Property.GridRow;
    area?: Property.GridArea;
};

export type { PApplyGrid, PApplyGridItem, PGridItem };

export default PGrid;
