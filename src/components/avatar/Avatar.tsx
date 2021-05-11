import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';
import random from 'lodash.random';

import Shape from '../../foundations/shape';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import Heading from '../heading';

import AvatarBase from './Avatar.base';
import { AVATAR_FALLBACK_COLORS } from './Avatar.constants';
import PAvatar from './Avatar.props';

const getAvatarBackgroundIgnore = (
    props: ThemedStyledProps<PAvatar, TTheme>
): FlattenSimpleInterpolation | null =>
    props.image
        ? css`
              background-image: url(${props.image});
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
          `
        : null;

const Avatar = styled(AvatarBase)<PAvatar>`
    color: white;
    position: relative;

    ${Shape} {
        overflow: hidden;
        background-color: ${AVATAR_FALLBACK_COLORS[random(0, 7)]};

        ${Heading}::first-letter {
            text-transform: uppercase;
        }
    }

    //&::after {
    //    content: '';
    //    position: absolute;
    //    top: 50%;
    //    left: 50%;
    //    width: 100%;
    //    height: 100%;
    //    background: red;
    //}
`;

type PAvatarImage = {
    image: string;
};

export const AvatarImage = styled.div<PAvatarImage>`
    background: rgb(103, 103, 103);
`;

export default Avatar;
