import styled from 'styled-components';
import random from 'lodash.random';

import Shape from '../../foundations/shape';
import Heading from '../heading';
import StatusBadge from '../status-badge';

import AvatarBase from './Avatar.base';
import { AVATAR_FALLBACK_COLORS } from './Avatar.constants';
import PAvatar from './Avatar.props';

const Avatar = styled(AvatarBase)<PAvatar>`
    color: white;
    position: relative;

    ${Shape}:first-child {
        overflow: hidden;
        background-color: ${AVATAR_FALLBACK_COLORS[random(0, 7)]};

        ${Heading}::first-letter {
            text-transform: uppercase;
        }
    }

    ${StatusBadge} {
        position: absolute;
        bottom: -3px;
        right: -3px;
    }

    ${(props): string => (props.status ? 'clip-path: inset(circle(10px at center));' : '')};
`;

type PAvatarImage = {
    image: string;
};

export const AvatarImage = styled.div<PAvatarImage>`
    background: rgb(103, 103, 103);
`;

export default Avatar;
