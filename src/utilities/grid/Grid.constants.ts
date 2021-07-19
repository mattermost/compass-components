import { Property } from 'csstype';

import { TGridGapProperty, TGridPlaceContentProperty, TGridPlaceItemsProperty } from './Grid.types';

const DEFAULT_GRID_COLUMNS_TEMPLATE: Property.GridTemplateColumns = 'none';

const DEFAULT_GRID_ROWS_TEMPLATE: Property.GridTemplateRows = 'none';

const DEFAULT_GRID_AREAS_TEMPLATE: Property.GridTemplateAreas = 'none';

const DEFAULT_GRID_GAP: Exclude<TGridGapProperty, Property.Gap> = {
    column: 'normal',
    row: 'normal',
};

const DEFAULT_GRID_PLACE_ITEMS: Exclude<TGridPlaceItemsProperty, Property.PlaceItems> = {
    alignItems: 'initial',
    justifyItems: 'initial',
};

const DEFAULT_GRID_PLACE_CONTENT: Exclude<TGridPlaceContentProperty, Property.PlaceContent> = {
    alignContent: 'initial',
    justifyContent: 'initial',
};

const DEFAULT_GRID_ITEM_COLUMNS: Property.GridColumn = 'initial';

const DEFAULT_GRID_ITEM_ROWS: Property.GridRow = 'initial';

export {
    DEFAULT_GRID_COLUMNS_TEMPLATE,
    DEFAULT_GRID_ROWS_TEMPLATE,
    DEFAULT_GRID_AREAS_TEMPLATE,
    DEFAULT_GRID_GAP,
    DEFAULT_GRID_PLACE_ITEMS,
    DEFAULT_GRID_PLACE_CONTENT,
    DEFAULT_GRID_ITEM_COLUMNS,
    DEFAULT_GRID_ITEM_ROWS,
};
