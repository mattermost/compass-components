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

const Grid = <T extends {}>({
    element = DEFAULT_GRID_ELEMENT,
    ...rest
}: PGrid & T): JSX.Element => {
    if (Utils.isFunctionalComponent(element)) {
        return <GridRoot {...rest} forwardedAs={element} />;
    }

    return <GridRoot {...rest} as={element} />;
};

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
