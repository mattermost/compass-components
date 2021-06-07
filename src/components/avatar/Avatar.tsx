import random from 'lodash.random';
import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyShape } from '../../foundations/shape/Shape.mixins';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { Utils } from '../../shared';
import { applyHeadingMargin, applyHeadingStyles } from '../heading/Heading.mixins';
import MentionBadge from '../mention-badge';
import StatusBadge from '../status-badge';

import AvatarBase from './Avatar.base';
import {
    DEFAULT_AVATAR_SIZE,
    AVATAR_SIZE_MAP,
    AVATAR_FALLBACK_COLORS,
    AVATAR_SIZES,
} from './Avatar.constants';
import PAvatar from './Avatar.props';

const Avatar = styled(AvatarBase)<PAvatar>(
    ({
        size = DEFAULT_AVATAR_SIZE,
        variant = 'circle',
        hasBorder = false,
        isActive = false,
        mentions,
        theme,
    }: ThemedStyledProps<PAvatar, TTheme>): FlattenSimpleInterpolation => {
        if (isActive) {
            Utils.assert(
                hasBorder,
                'using `isActive=true` is only possibly together with the prop `hasBorder` set to true'
            );
        }

        const borderSize = AVATAR_SIZES.indexOf(size) > 2 ? 3 : 2;
        const scaleFactor = (1 - (borderSize * 2) / AVATAR_SIZE_MAP[size].size).toFixed(4);

        return css`
            color: white;
            position: relative;

            > div:first-child {
                display: flex;
                overflow: hidden;
                background-color: ${AVATAR_FALLBACK_COLORS[random(0, 7)]};
                align-items: center;
                justify-content: center;

                ${applyShape({
                    width: AVATAR_SIZE_MAP[size].size,
                    height: AVATAR_SIZE_MAP[size].size,
                    radius: variant === 'circle' ? variant : AVATAR_SIZE_MAP[size].radius,
                })};

                ${applyHeadingStyles({
                    size: AVATAR_SIZE_MAP[size].text,
                })};

                ${applyHeadingMargin({ margin: 'none' })};

                ${hasBorder &&
                isActive &&
                css`
                    box-shadow: 0 0 0 3px ${theme.background.default},
                        0 0 0 6px ${theme.palette.secondary.main};

                    transform: scale(${scaleFactor}, ${scaleFactor});
                `}

                ${hasBorder &&
                css`
                    &:hover {
                        box-shadow: 0 0 0 ${borderSize}px ${theme.background.default},
                            0 0 0 ${borderSize * 2}px ${theme.palette.primary.main};

                        transform: scale(${scaleFactor}, ${scaleFactor});
                    }
                `}

                transition: box-shadow 500ms ease, transform 500ms ease;
            }

            ${StatusBadge} {
                position: absolute;
                bottom: ${AVATAR_SIZE_MAP[size].status.offset}px;
                right: ${AVATAR_SIZE_MAP[size].status.offset}px;
            }

            ${MentionBadge} {
                position: absolute;
                top: ${mentions === 0 ? -2 : -3}px;
                right: ${mentions === 0 ? -2 : -3}px;
            }
        `;
    }
);

export default Avatar;
