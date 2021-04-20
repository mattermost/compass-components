import styled from 'styled-components';

import { PStyledGrid } from './Grid.props';
import { parseSpacing } from './Grid.spacing';

const StyledGrid = styled.div.attrs({ className: 'Grid' }).withConfig({
    shouldForwardProp: (property) => ['children', 'className', 'onClick'].includes(property),
})<PStyledGrid>`
    display: flex;
    flex: ${(props): number | 'auto' => props.flex};
    flex-wrap: ${(props): string => (props.wrap ? 'wrap' : 'nowrap')};
    flex-direction: ${(props): string => (props.row ? 'row' : 'column')};
    align-items: ${(props): string => (props.row ? props.alignment : props.justify)};
    justify-content: ${(props): string => (props.row ? props.justify : props.alignment)};
    padding: ${(props): string => (props.padding ? parseSpacing(props.padding) : '0')};
    margin: ${(props): string => (props.margin ? parseSpacing(props.margin) : '0')};
    ${(props): string => (props.width && props.width >= 0 ? `max-width: ${props.width}px;` : '')}
    ${(props): string =>
        props.height && props.height >= 0 ? `max-height: ${props.height}px;` : ''}
`;

export default StyledGrid;
