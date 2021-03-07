import styled from 'styled-components';

import { borderRadius, elevation } from '../../global-styles/globalStyles';

import { PShape } from './Shape';

const SShape = styled.div<PShape>`
    display: flex;
    flex-direction: column;
    width: var(--shape-width, auto);
    height: var(--shape-height, auto);
    background-color: var(--shape-background, white);
    padding: var(--shape-padding, calc(var(--gutter-default, 0) * 3));
    border-radius: ${(props): string => borderRadius(props.borderRadius)};
    box-shadow: ${(props): string => elevation(props.elevation)};
    border: ${(props): string => (props.border ? 'var(--border-default)' : 'none')};
`;

export default SShape;
