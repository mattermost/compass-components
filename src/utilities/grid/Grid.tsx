import React from 'react';
import styled from 'styled-components';

import { Utils } from '../../shared';

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
})((props: PApplyGrid) => applyGrid(props));

const Grid = ({ element = DEFAULT_GRID_ELEMENT, ...rest }: PGrid): JSX.Element => (
    <GridRoot {...rest} as={element} />
);

const GridItemRoot = styled.div.withConfig({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, ['columns', 'rows', 'area']) && validator(property),
})((props: PApplyGridItem) => applyGridItem(props));

const GridItem = ({ element = DEFAULT_GRID_ITEM_ELEMENT, ...rest }: PGridItem): JSX.Element => (
    <GridItemRoot {...rest} as={element} />
);

export { GridItem };

export default Grid;
