import type { Property } from 'csstype';

type TGridPlaceItemsProperty =
    | Property.PlaceItems
    | {
          alignItems?: Property.AlignItems;
          justifyItems?: Property.JustifyItems;
      };

type TGridPlaceContentProperty =
    | Property.PlaceContent
    | {
          alignContent?: Property.AlignContent;
          justifyContent?: Property.JustifyContent;
      };

type TGridGapProperty = Property.Gap | { column?: Property.ColumnGap; row?: Property.RowGap };

type TGridItemPlaceSelfProperty =
    | Property.PlaceSelf
    | {
          alignItems?: Property.AlignSelf;
          justifyItems?: Property.JustifySelf;
      };

export type {
    TGridPlaceItemsProperty,
    TGridPlaceContentProperty,
    TGridGapProperty,
    TGridItemPlaceSelfProperty,
};
