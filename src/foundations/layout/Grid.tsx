import styled from 'styled-components';

import { Utils } from '../../utils';

import { PGrid } from './Grid.props';
import { parseSpacing } from './Spacing';
import {
    DEFAULT_GRID_ALIGNMENT,
    DEFAULT_GRID_COMPONENT,
    DEFAULT_GRID_FLEX,
    DEFAULT_GRID_JUSTIFY,
    DEFAULT_GRID_ROW,
    DEFAULT_GRID_WRAP,
} from './Grid.constants';
import { TGridAlignment, TGridJustify } from './Grid.types';

const Grid = styled.div
    // ignoring the className property prevents duplicate classes to be added to the HTML element
    .attrs(
        ({
            component,
            alignment,
            justify,
            row,
            flex,
            wrap,
            className: ignoreClassName,
            ...rest
        }: PGrid) => ({
            as: component || DEFAULT_GRID_COMPONENT,
            alignment: alignment || DEFAULT_GRID_ALIGNMENT,
            justify: justify || DEFAULT_GRID_JUSTIFY,
            flex: flex || DEFAULT_GRID_FLEX,
            row: row || DEFAULT_GRID_ROW,
            wrap: wrap || DEFAULT_GRID_WRAP,
            ...rest,
        })
    )
    .withConfig({
        shouldForwardProp: Utils.forwardProperties(),
    })<PGrid>`
    display: flex;
    flex: ${(props): number | 'auto' => props.flex};
    flex-wrap: ${(props): string => (props.wrap ? 'wrap' : 'nowrap')};
    flex-direction: ${(props): string => (props.row ? 'row' : 'column')};
    align-items: ${(props): TGridJustify | TGridAlignment =>
        props.row ? props.alignment : props.justify};
    justify-content: ${(props): TGridJustify | TGridAlignment =>
        props.row ? props.justify : props.alignment};
    padding: ${(props): string => (props.padding ? parseSpacing(props.padding) : '0')};
    margin: ${(props): string => (props.margin ? parseSpacing(props.margin) : '0')};
    ${(props): string => (props.width && props.width >= 0 ? `max-width: ${props.width}px;` : '')}
    ${(props): string =>
        props.height && props.height >= 0 ? `max-height: ${props.height}px;` : ''}
    background: transparent;
`;

export default Grid;
