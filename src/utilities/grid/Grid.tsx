import React from 'react';
import styled, { css } from 'styled-components';

import { Utils } from '../../shared';
import { applyMargin, applyPadding } from '../spacing';

import { applyGrid, applyGridItem } from './Grid.mixins';
import { DEFAULT_GRID_ELEMENT, DEFAULT_GRID_ITEM_ELEMENT } from './Grid.constants';
import PGrid, { PApplyGrid, PApplyGridItem, PGridItem } from './Grid.props';

const GridRoot = styled.div.withConfig({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, [
            'columnsTemplate',
            'rowsTemplate',
            'areasTemplate',
            'gap',
            'placeItems',
            'placeContent',
        ]) && validator(property),
})(
    ({ padding, margin, ...rest }: PApplyGrid) => css`
        ${applyGrid(rest)};
        ${padding && applyPadding(padding)};
        ${margin && applyMargin(margin)};
    `
);

/**
 * adding a generic Type here allows for safe typing when using elements other
 * than basic HTML (e.g. a `Shape` component)
 *
 * @example
 * ```typescript
 * <Grid<PShape>
 *   element={Shape}
 *   columnsTemplate={'auto 1fr auto'}
 *   placeItems={{alignItems: 'center'}}
 *   padding={Spacing.trbl({top: 75, right: 200, bottom: 75, left: 100})}
 *   width={'100%'}
 *   height={40}
 *   radius={0}
 * >
 * ```
 *
 * In this example neither `width`, `height` nor `radius` are properties of the
 * Grid component, but by using `<PShape>` we safely type those props in, when
 * using the `Shape` component in the `element` prop
 */
const Grid = <T extends {}>({
    element = DEFAULT_GRID_ELEMENT,
    ...rest
}: PGrid & T): JSX.Element => <GridRoot {...rest} as={element} />;

const GridItemRoot = styled.div.withConfig({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, ['columns', 'rows', 'area']) && validator(property),
})(
    ({ padding, margin, ...rest }: PApplyGridItem) => css`
        ${applyGridItem(rest)};
        ${padding && applyPadding(padding)};
        ${margin && applyMargin(margin)};
    `
);

const GridItem = <T extends {}>({
    element = DEFAULT_GRID_ITEM_ELEMENT,
    ...rest
}: PGridItem & T): JSX.Element => <GridItemRoot {...rest} as={element} />;

export { GridItem };

export default Grid;
