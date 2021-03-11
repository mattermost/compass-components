import styled from 'styled-components';

import { PBadges } from './Badges.props';

const SBadges = styled.span<PBadges>`
    width: ${(props): string => props.width};
    height: ${(props): string => props.height};
    background-color: ${(props): string => props.background};
    color: ${(props): string => props.color};
    padding: ${(props): string => props.padding};
    border-radius: ${(props): string => props.borderRadius};
    box-shadow: ${(props): string => props.boxShadow};
    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
`;

export default SBadges;
