import styled from 'styled-components';

import { borderRadius, elevation } from '../../global-styles/globalStyles';

import { PShape } from './Shape';

const SShape = styled.div<PShape>`
    display: flex;
    width: var(--panel-width, auto);
    height: var(--panel-height, auto);
    background-color: var(--panel-background, white);
    padding: calc(var(--gutter-default) * 4);
    border-radius: ${props => borderRadius(props.borderRadius)};
    box-shadow: ${props => elevation(props.elevation)};
    border: var(--border-default);
`;

export default SShape;
