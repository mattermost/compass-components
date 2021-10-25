import type { Property } from 'csstype';

const DEFAULT_GRID_ELEMENT = 'div';

const DEFAULT_GRID_COLUMNS_TEMPLATE: Property.GridTemplateColumns = 'none';

const DEFAULT_GRID_ROWS_TEMPLATE: Property.GridTemplateRows = 'none';

const DEFAULT_GRID_AREAS_TEMPLATE: Property.GridTemplateAreas = 'none';

const DEFAULT_GRID_GAP: Property.Gap = 'normal';

const DEFAULT_GRID_PLACE_ITEMS: Property.PlaceItems = 'initial';

const DEFAULT_GRID_PLACE_CONTENT: Property.PlaceContent = 'initial';

const DEFAULT_GRID_ITEM_COLUMNS: Property.GridColumn = 'initial';

const DEFAULT_GRID_ITEM_ROWS: Property.GridRow = 'initial';

const DEFAULT_GRID_ITEM_PLACE_SELF: Property.PlaceSelf = 'initial';

export {
    DEFAULT_GRID_ELEMENT,
    DEFAULT_GRID_ELEMENT as DEFAULT_GRID_ITEM_ELEMENT,
    DEFAULT_GRID_COLUMNS_TEMPLATE,
    DEFAULT_GRID_ROWS_TEMPLATE,
    DEFAULT_GRID_AREAS_TEMPLATE,
    DEFAULT_GRID_GAP,
    DEFAULT_GRID_PLACE_ITEMS,
    DEFAULT_GRID_PLACE_CONTENT,
    DEFAULT_GRID_ITEM_COLUMNS,
    DEFAULT_GRID_ITEM_ROWS,
    DEFAULT_GRID_ITEM_PLACE_SELF,
};
