import styled, { css } from 'styled-components';
import {
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemedStyledProps,
} from 'styled-components/ts3.6';

import { Spacing } from '../../foundations/layout';
import { applyPadding } from '../../foundations/layout/Grid.mixins';
import { applyShape } from '../../foundations/shape/Shape.mixins';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { applyTextMargin, applyTextStyles } from '../text/Text.mixins';

import MentionBadgeBase from './MentionBadge.base';
import {
    DEFAULT_MENTIONBADGE_SIZE,
    MENTIONBADGE_HEIGHT_SIZE_MAP,
    MENTIONBADGE_PADDING_SIZE_MAP,
    MENTIONBADGE_TEXT_SIZE_MAP,
} from './MentionBadge.constants';
import PMentionBadge from './MentionBadge.props';

const getBadgeColors = ({
    inverted,
    background,
    theme,
}: ThemedStyledProps<PMentionBadge, TTheme>): FlattenSimpleInterpolation => {
    if (inverted) {
        return css`
            color: ${theme.palette.primary.main};
            background-color: currentColor;
            border: 2px solid ${background || theme.background.default};
        `;
    }

    return css`
        color: ${theme.text.contrast};
        background-color: ${theme.background.badge};
        border: 2px solid ${background || theme.background.default};
    `;
};

const MentionBadge = styled(MentionBadgeBase)<PMentionBadge>(
    ({
        mentions = 1,
        size = DEFAULT_MENTIONBADGE_SIZE,
    }: ThemedStyledProps<PMentionBadge, TTheme>): FlattenInterpolation<
        ThemedStyledProps<PMentionBadge, TTheme>
    > => {
        const isUnreadBadge = mentions === 0;
        const mentionLength = mentions.toString().length;

        return css`
            ${getBadgeColors};

            ${applyPadding(
                Spacing.symmetric({
                    vertical: 0,
                    horizontal: isUnreadBadge
                        ? 0
                        : MENTIONBADGE_PADDING_SIZE_MAP[size][mentionLength - 1],
                })
            )};

            ${applyShape({
                radius: isUnreadBadge ? 'circle' : 'pill',
                width: isUnreadBadge ? 12 : 'auto',
                height: MENTIONBADGE_HEIGHT_SIZE_MAP[size],
            })};

            ${applyTextStyles({ size: MENTIONBADGE_TEXT_SIZE_MAP[size], weight: 'bold' })};
            ${applyTextMargin({ margin: 'none' })};
        `;
    }
);

export default MentionBadge;
