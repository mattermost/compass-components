import random from 'lodash.random';
import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import { applyHeadingStyles } from '../heading';
import { applyShape } from '../../foundations/shape';
import { TTheme } from '../../utilities/theme';
import { Utils } from '../../shared';
import MentionBadge from '../mention-badge';
import StatusBadge from '../status-badge';

import { AVATAR_SIZE_MAP, AVATAR_FALLBACK_COLORS, AVATAR_SIZES } from './Avatar.constants';
import { PAvatarMentionBadgeRoot, PAvatarRoot, PAvatarStatusBadgeRoot } from './Avatar.props';

const AvatarStatusBadgeRoot = styled(StatusBadge)<PAvatarStatusBadgeRoot>(
    ({ offset }) => css`
        position: absolute;
        bottom: ${offset}px;
        right: ${offset}px;
    `
);

const AvatarMentionBadgeRoot = styled(MentionBadge)<PAvatarMentionBadgeRoot>(
    ({ isUnreadBadge }) => css`
        position: absolute;
        top: ${isUnreadBadge ? -2 : -3}px;
        right: ${isUnreadBadge ? -2 : -3}px;
    `
);

const AvatarRoot = styled.button.withConfig<PAvatarRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})(
    ({
        theme,
        size,
        variant,
        disableHover,
        isActive,
    }: ThemedStyledProps<PAvatarRoot, TTheme>): FlattenSimpleInterpolation => {
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
                    weight: 'bold',
                })};

                ${isActive &&
                css`
                    box-shadow: 0 0 0 3px ${theme.background.default},
                        0 0 0 6px ${theme.palette.secondary.main};

                    transform: scale(${scaleFactor}, ${scaleFactor});
                `}

                ${!disableHover &&
                css`
                    &:hover {
                        box-shadow: 0 0 0 ${borderSize}px ${theme.background.default},
                            0 0 0 ${borderSize * 2}px ${theme.palette.primary.main};

                        transform: scale(${scaleFactor}, ${scaleFactor});
                    }
                `}

                transition: box-shadow 500ms ease, transform 500ms ease;
            }
        `;
    }
);

export { AvatarStatusBadgeRoot, AvatarMentionBadgeRoot };

export default AvatarRoot;
