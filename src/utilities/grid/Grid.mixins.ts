import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { Utils } from '../../shared';

import { PApplyGrid, PApplyGridItem } from './Grid.props';

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
