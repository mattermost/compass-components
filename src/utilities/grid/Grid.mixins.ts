import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { Utils } from '../../shared';

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
    columnsTemplate = 'none',
    rowsTemplate = 'none',
    areasTemplate = 'none',
    gap = { column: 'normal', row: 'normal' },
    placeItems = { alignItems: 'initial', justifyItems: 'initial' },
    placeContent = { alignContent: 'initial', justifyContent: 'initial' },
}: PApplyGrid): FlattenSimpleInterpolation => css`
    display: grid;

    grid-template-rows: ${columnsTemplate};
    grid-template-columns: ${rowsTemplate};
    grid-template-areas: ${areasTemplate};

    column-gap: ${Utils.isNumber(gap) || Utils.isString(gap) ? gap : gap.column};
    row-gap: ${Utils.isNumber(gap) || Utils.isString(gap) ? gap : gap.row};

    align-items: ${Utils.isString(placeItems) ? placeItems : placeItems.alignItems};
    justify-items: ${Utils.isString(placeItems) ? placeItems : placeItems.justifyItems};
    align-content: ${Utils.isString(placeContent) ? placeContent : placeContent.alignContent};
    justify-content: ${Utils.isString(placeContent) ? placeContent : placeContent.justifyContent};
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
    columns = 'initial',
    rows = 'initial',
    area,
}: PApplyGridItem): FlattenSimpleInterpolation => css`
    grid-column: ${columns};
    grid-row: ${rows};
    grid-area: ${area};
`;

export { applyGrid, applyGridItem };
