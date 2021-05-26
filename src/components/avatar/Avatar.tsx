import random from 'lodash.random';
import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyShape } from '../../foundations/shape/Shape.mixins';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { applyHeadingMargin, applyHeadingStyles } from '../heading/Heading.mixins';
import MentionBadge from '../mention-badge';
import StatusBadge from '../status-badge';

import AvatarBase from './Avatar.base';
import {
    DEFAULT_AVATAR_SIZE,
    AVATAR_SIZE_MAP,
    AVATAR_TEXT_SIZE_MAP,
    AVATAR_CORNER_RADIUS_SIZE_MAP,
    AVATAR_FALLBACK_COLORS,
} from './Avatar.constants';
import PAvatar from './Avatar.props';

const Avatar = styled(AvatarBase)<PAvatar>(
    ({
        size = DEFAULT_AVATAR_SIZE,
        isTeam = false,
    }: ThemedStyledProps<PAvatar, TTheme>): FlattenSimpleInterpolation => css`
        color: white;
        position: relative;

        > div:first-child {
            display: flex;
            overflow: hidden;
            background-color: ${AVATAR_FALLBACK_COLORS[random(0, 7)]};
            align-items: center;
            justify-content: center;

            ${applyShape({
                width: AVATAR_SIZE_MAP[size],
                height: AVATAR_SIZE_MAP[size],
                radius: isTeam ? AVATAR_CORNER_RADIUS_SIZE_MAP[size] : 'circle',
            })};

            ${applyHeadingStyles({
                element: 'h6',
                size: AVATAR_TEXT_SIZE_MAP[size],
            })};

            ${applyHeadingMargin({ margin: 'none' })};
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
    `
);

export default Avatar;
