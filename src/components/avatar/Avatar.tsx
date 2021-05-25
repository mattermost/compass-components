import styled from 'styled-components';
import random from 'lodash.random';

import Shape from '../../foundations/shape';
import Heading from '../heading';
import MentionBadge from '../mention-badge';
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
        align-items: center;
        justify-content: center;

        ${Heading}::first-letter {
            text-transform: uppercase;
        }
    }

    ${StatusBadge} {
        position: absolute;
        bottom: -3px;
        right: -3px;
    }

    ${MentionBadge} {
        position: absolute;
        top: -2px;
        right: -2px;
    }
`;

export default Avatar;
