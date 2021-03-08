import styled from 'styled-components';

import { borderRadius, elevation } from '../../global-styles/globalStyles';

import { PShape } from './Shape';

type PStyledShape = PShape & {
    scWidth: string;
    scHeight: string;
    scPadding: string;
    scBackground: string;
};

const StyledShape = styled.div<PStyledShape>`
    display: flex;
    flex-direction: column;
    width: ${(props): string => props.scWidth};
    height: ${(props): string => props.scHeight};
    background-color: ${(props): string => props.scBackground};
    padding: ${(props): string => props.scPadding};
    border-radius: ${(props): string => borderRadius(props.borderRadius)};
    box-shadow: ${(props): string => elevation(props.elevation)};
    z-index: ${(props): number => props.elevation || 0};
    border: ${(props): string => (props.border ? 'var(--border-default)' : 'none')};
`;

export type { PStyledShape };

export default StyledShape;
