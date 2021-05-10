import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';
import random from 'lodash.random';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import Heading from '../heading';

import AvatarBase from './Avatar.base';
import { AVATAR_FALLBACK_COLORS } from './Avatar.constants';
import PAvatar from './Avatar.props';

const getAvatarStyles = (
    propsIgnore: ThemedStyledProps<PAvatar, TTheme>
): FlattenSimpleInterpolation => css`
    color: white;
    background-color: ${AVATAR_FALLBACK_COLORS[random(0, 7)]};
`;

const Avatar = styled(AvatarBase)<PAvatar>`
    ${Heading}::first-letter {
        text-transform: uppercase;
    }

    ${getAvatarStyles}
`;

export default Avatar;
