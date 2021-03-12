import styled from 'styled-components';

import { PGrid } from './Grid';

type PStyledGrid = Required<Omit<PGrid, 'component' | 'children' | 'margin' | 'padding'>> &
    Pick<PGrid, 'margin' | 'padding'>;

const StyledGrid = styled.div<PStyledGrid>`
    display: flex;
    flex: ${(props): number => props.flex || 0};
    flex-wrap: wrap;
    flex-direction: ${(props): string => (props.row ? 'row' : 'column')};
    align-items: ${(props): string => (props.row ? props.alignment : props.justify)};
    justify-content: ${(props): string => (props.row ? props.justify : props.alignment)};
    padding: ${(props): string => props.padding?.parseSpacing() || '0'};
    margin: ${(props): string => props.margin?.parseSpacing() || '0'};
`;

export default StyledGrid;
