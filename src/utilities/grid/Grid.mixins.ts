import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { Utils } from '../../shared';

import {
    DEFAULT_GRID_AREAS_TEMPLATE,
    DEFAULT_GRID_COLUMNS_TEMPLATE,
    DEFAULT_GRID_GAP,
    DEFAULT_GRID_ITEM_COLUMNS,
    DEFAULT_GRID_ITEM_PLACE_SELF,
    DEFAULT_GRID_ITEM_ROWS,
    DEFAULT_GRID_PLACE_CONTENT,
    DEFAULT_GRID_PLACE_ITEMS,
    DEFAULT_GRID_ROWS_TEMPLATE,
} from './Grid.constants';
import { PApplyGrid, PApplyGridItem } from './Grid.props';

/**
 * applies `display: grid` alongside all definitions passed to this mixin.
 *
 * parameter values are aligned with the CSS property values, so you can use
 * them as you would in normal CSS/SCSS.
 *
 * values for `gap`, `placeItems` and `placeContent` are combined, when used
 * with the CSS property values, but can be defined separately by using a object
 * notation with properties `alignItems`/`alignContent` or
 * `justifyItems`/`justifyContent`.
 *
 * @example
 * same value for `alignItems` and `justifyItems`
 * ```typescript
 * applyGridItem({
 *   placeItems: 'start'
 * })
 * ```
 *
 * @example
 * separate values for `alignItems` and `justifyItems`
 * ```typescript
 * applyGridItem({
 *   placeItems: { alignItems: 'start', justifyItems: 'stretch' }
 * })
 * ```
 *
 * @example
 * same gap value for `column` and `row`
 * ```typescript
 * applyGridItem({
 *   gap: 15
 * })
 * ```
 *
 * @example
 * separate gap values for `column` and `row`
 * ```typescript
 * applyGridItem({
 *   gap: { column: 15, row: 10 }
 * })
 * ```
 *
 * It is to be used in a components root (styled component) as shown in the
 * exmaple below:
 *
 * @example
 * usage in a components root
 * ```typescript
 * const ExampleComponentRoot = styled.div.withConfig({
 *   shouldForwardProp: (property, validator) =>
 *     Utils.blockProperty(property) && validator(property),
 * })((props: PApplyGridItem) => css`
 *   // other style definitions
 *   ${applyGrid({
 *     columnsTemplate: 'auto 1fr auto',
 *     gap: 15,
 *     placeItems: {
 *       alignItems: 'start',
 *       justifyItems: 'stretch',
 *     }
 *   })};
 * `;
 * ```
 */
const applyGrid = ({
    columnsTemplate = DEFAULT_GRID_COLUMNS_TEMPLATE,
    rowsTemplate = DEFAULT_GRID_ROWS_TEMPLATE,
    areasTemplate = DEFAULT_GRID_AREAS_TEMPLATE,
    gap = DEFAULT_GRID_GAP,
    placeItems = DEFAULT_GRID_PLACE_ITEMS,
    placeContent = DEFAULT_GRID_PLACE_CONTENT,
}: PApplyGrid): FlattenSimpleInterpolation => css`
    display: grid;

    grid-template-columns: ${columnsTemplate};
    grid-template-rows: ${rowsTemplate};
    grid-template-areas: ${areasTemplate};

    column-gap: ${Utils.isNumber(gap) || Utils.isString(gap)
        ? gap
        : gap.column || DEFAULT_GRID_GAP};
    row-gap: ${Utils.isNumber(gap) || Utils.isString(gap) ? gap : gap.row || DEFAULT_GRID_GAP};

    ${Utils.isString(placeItems)
        ? css`
              place-items: ${placeItems};
          `
        : css`
              align-items: ${placeItems.alignItems || DEFAULT_GRID_PLACE_ITEMS};
              justify-items: ${placeItems.justifyItems || DEFAULT_GRID_PLACE_ITEMS};
          `};

    ${Utils.isString(placeContent)
        ? css`
              place-content: ${placeContent};
          `
        : css`
              align-content: ${placeContent.alignContent || DEFAULT_GRID_PLACE_CONTENT};
              justify-content: ${placeContent.justifyContent || DEFAULT_GRID_PLACE_CONTENT};
          `};
`;

/**
 * applies grid-item styles based on the passed values.
 *
 * parameter values are aligned with the CSS property values, so you can use
 * them as you would in normal CSS/SCSS.
 *
 * It is to be used in a components root (styled component) as shown in the
 * exmaple below:
 *
 * @example
 * usage in a components root
 * ```typescript
 * const ExampleComponentRoot = styled.div.withConfig({
 *   shouldForwardProp: (property, validator) =>
 *     Utils.blockProperty(property) && validator(property),
 * })((props: PApplyGridItem) => css`
 *   // other style definitions
 *   ${applyGridItem({
 *     columns: '1 / span 2',
 *     rows: '1',
 *   })};
 * `;
 * ```
 */
const applyGridItem = ({
    columns = DEFAULT_GRID_ITEM_COLUMNS,
    rows = DEFAULT_GRID_ITEM_ROWS,
    placeSelf = DEFAULT_GRID_ITEM_PLACE_SELF,
    area,
}: PApplyGridItem): FlattenSimpleInterpolation => css`
    grid-column: ${columns};
    grid-row: ${rows};
    ${area &&
    css`
        grid-area: ${area};
    `};

    ${Utils.isString(placeSelf)
        ? css`
              place-items: ${placeSelf};
          `
        : css`
              align-items: ${placeSelf.alignItems || DEFAULT_GRID_ITEM_PLACE_SELF};
              justify-items: ${placeSelf.justifyItems || DEFAULT_GRID_ITEM_PLACE_SELF};
          `};
`;

export { applyGrid, applyGridItem };
