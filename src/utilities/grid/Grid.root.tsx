import styled, { css } from 'styled-components';

import { Utils } from '../../shared';
import { applyMargin, applyPadding } from '../spacing';

import { applyGrid, applyGridItem } from './Grid.mixins';
import type { PApplyGrid, PApplyGridItem } from './Grid.props';

const GridRoot = styled.div(
    ({ padding, margin, ...rest }: PApplyGrid) => css`
        ${applyGrid(rest)};
        ${padding && applyPadding(padding)};
        ${margin && applyMargin(margin)};
    `
);

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

export { GridRoot, GridItemRoot };
