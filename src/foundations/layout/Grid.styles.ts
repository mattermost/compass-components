import styled from 'styled-components';

import { PGrid } from './Grid';

type PStyledGrid = Required<Omit<PGrid, 'component' | 'children'>>;

const StyledGrid = styled.div<PStyledGrid>`
    display: flex;
    flex: ${(props): number => props.flex || 0};
    flex-wrap: wrap;
    flex-direction: ${(props): string => (props.row ? 'row' : 'column')};
    align-items: ${(props): string => (props.row ? props.alignment : props.justify)};
    justify-content: ${(props): string => (props.row ? props.justify : props.alignment)};
    padding: ${(props): string => props.padding.parseSpacing()};
    margin: ${(props): string => props.margin.parseSpacing()};
`;

export default StyledGrid;
