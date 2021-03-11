import styled from 'styled-components';

import { borderRadius, elevation } from '../theme-provider/global-styles/globalStyles';

import { PStyledShape } from './Shape.props';

const StyledShape = styled.div<PStyledShape>`
    display: flex;
    flex-direction: column;
    width: ${(props): string => props.width};
    height: ${(props): string => props.height};
    background-color: ${(props): string => props.background};
    padding: ${(props): string => props.padding};
    border-radius: ${(props): string => borderRadius(props.borderRadius)};
    box-shadow: ${(props): string => elevation(props.elevation)};
    z-index: ${(props): number => props.elevation || 0};
    border: ${(props): string => (props.border ? 'var(--border-default)' : 'none')};
    transition: box-shadow 500ms ease-in-out;

    &:hover {
        box-shadow: ${(props): string => elevation(props.elevationOnHover)};
    }
`;

export default StyledShape;
