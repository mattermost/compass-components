import styled from 'styled-components';

import { PGrid } from './Grid';

const SRow = styled.div<PGrid>`
    display: flex;
    flex: var(--grid-flex, 1);
    flex-direction: ${props => (props.row ? 'row' : 'column')};
    align-items: ${props => (props.row ? 'var(--grid-align, initial)' : 'var(--grid-justify, initial)')};
    justify-content: ${props => (props.row ? 'var(--grid-justify, initial)' : 'var(--grid-align, initial)')};
    padding: var(--grid-padding, calc(var(--gutter-default, 0) * 3));
`;

export default SRow;
