import { Property } from 'csstype';
import React from 'react';

type PGrid = PApplyGrid & { element: string | React.FC };

type PGridItem = PApplyGridItem & { element: string | React.FC };

type PApplyGrid = {
    columnsTemplate?: Property.GridTemplateColumns;
    rowsTemplate?: Property.GridTemplateRows;
    areasTemplate?: Property.GridTemplateAreas;
    gap?: Property.Gap | { column?: Property.ColumnGap; row?: Property.RowGap };
    placeItems?:
        | Property.PlaceItems
        | {
              alignItems?: Property.AlignItems;
              justifyItems?: Property.JustifyItems;
          };
    placeContent?:
        | Property.PlaceContent
        | {
              alignContent?: Property.AlignContent;
              justifyContent?: Property.JustifyContent;
          };
};

type PApplyGridItem = {
    columns?: Property.GridColumn;
    rows?: Property.GridRow;
    area?: Property.GridArea;
};

export type { PApplyGrid, PApplyGridItem, PGridItem };

export default PGrid;
