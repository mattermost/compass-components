import React from 'react';

import { DEFAULT_GRID_ELEMENT, DEFAULT_GRID_ITEM_ELEMENT } from './Grid.constants';
import PGrid, { PGridItem } from './Grid.props';
import { GridRoot, GridItemRoot } from './Grid.root';

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
 * `Grid` component, but by using `<PShape>` we safely type those props in, when
 * using the `Shape` component in the `element` prop
 */
const Grid = function <T>({ element = DEFAULT_GRID_ELEMENT, ...rest }: PGrid & T): JSX.Element {
    return <GridRoot {...rest} as={element} />;
};

/**
 * adding a generic Type here allows for safe typing when using elements other
 * than basic HTML (e.g. a `Shape` component)
 *
 * @example
 * ```typescript
 * <GridItem<PShape>
 *   element={Shape}
 *   columns={'1 / 2'}
 *   padding={Spacing.all(75)}
 *   width={'100%'}
 *   radius={8}
 *   backgroundColor={'#FFF'}
 * >
 * ```
 *
 * In this example neither `width`, `radius` nor `backgroundColor` are
 * properties of the `GridItem` component, but by using `<PShape>` we safely
 * type those props in, when using the `Shape` component in the `element` prop
 */
const GridItem = function <T>({
    element = DEFAULT_GRID_ITEM_ELEMENT,
    ...rest
}: PGridItem & T): JSX.Element {
    return <GridItemRoot {...rest} as={element} />;
};

export { GridItem };

export default Grid;
