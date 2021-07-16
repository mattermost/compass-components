import React from 'react';

import { Utils } from '../../shared';

import {
    DEFAULT_GRID_ALIGNMENT,
    DEFAULT_GRID_COMPONENT,
    DEFAULT_GRID_FLEX,
    DEFAULT_GRID_JUSTIFY,
    DEFAULT_GRID_ROW,
    DEFAULT_GRID_WRAP,
    GRID_ALIGNMENTS,
    GRID_ELEMENTS,
    GRID_JUSTIFIES,
} from './Grid.constants';
import PGrid from './Grid.props';
import GridRoot from './Grid.root';

const Grid = ({
    element = DEFAULT_GRID_COMPONENT,
    alignment = DEFAULT_GRID_ALIGNMENT,
    justify = DEFAULT_GRID_JUSTIFY,
    flex = DEFAULT_GRID_FLEX,
    row = DEFAULT_GRID_ROW,
    wrap = DEFAULT_GRID_WRAP,
    ...rest
}: PGrid): JSX.Element => {
    Utils.assert(
        GRID_ALIGNMENTS.includes(alignment),
        `Grid: incompatible alignment property set on Grid component. Please choose from the following: ${GRID_ALIGNMENTS.join(
            ', '
        )}`
    );

    Utils.assert(
        GRID_JUSTIFIES.includes(justify),
        `Grid: incompatible justify property set on Grid component. Please choose from the following: ${GRID_JUSTIFIES.join(
            ', '
        )}`
    );

    Utils.assert(
        GRID_ELEMENTS.includes(element),
        `Grid: incompatible element property set on Grid component. Please choose from the following: ${GRID_ELEMENTS.join(
            ', '
        )}`
    );

    const rootProperties = {
        element,
        alignment,
        justify,
        flex,
        row,
        wrap,
        ...rest,
    };

    return <GridRoot {...rootProperties} />;
};

export default Grid;
