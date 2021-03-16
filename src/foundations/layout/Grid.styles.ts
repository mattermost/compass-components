import styled from 'styled-components';

import { PStyledGrid } from './Grid.props';
import { parseSpacing } from './Grid.spacing';

const StyledGrid = styled.div<PStyledGrid>`
    display: flex;
    flex: ${(props): number => props.flex || 0};
    flex-wrap: wrap;
    flex-direction: ${(props): string => (props.row ? 'row' : 'column')};
    align-items: ${(props): string => (props.row ? props.alignment : props.justify)};
    justify-content: ${(props): string => (props.row ? props.justify : props.alignment)};
    padding: ${(props): string => (props.padding ? parseSpacing(props.padding) : '0')};
    margin: ${(props): string => (props.margin ? parseSpacing(props.margin) : '0')};
`;

export default StyledGrid;
