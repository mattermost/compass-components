import styled, { css } from 'styled-components';
import {
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemedStyledProps,
} from 'styled-components/ts3.6';

import { Utils } from '../../shared';
import { applyShape } from '../../foundations/shape';
import Spacing, { applyPadding } from '../../utilities/spacing';
import { TTheme } from '../../utilities/theme';
import { applyTextMargin, applyTextStyles } from '../text';

import {
    MENTIONBADGE_HEIGHT_SIZE_MAP,
    MENTIONBADGE_PADDING_SIZE_MAP,
    MENTIONBADGE_TEXT_SIZE_MAP,
} from './MentionBadge.constants';
import { PMentionBadgeRoot } from './MentionBadge.props';

const getBadgeColors = ({
    inverted,
    theme,
    borderColor = theme.background.default,
}: ThemedStyledProps<PMentionBadgeRoot, TTheme>): FlattenSimpleInterpolation => {
    if (inverted) {
        return css`
            background-color: ${theme.palette.primary.contrast};
            color: ${theme.palette.primary.main};
            border: 2px solid ${borderColor};
        `;
    }

    return css`
        color: ${theme.text.contrast};
        background-color: ${theme.background.badge};
        border: 2px solid ${borderColor};
    `;
};

const MentionBadgeRoot = styled.div.withConfig<PMentionBadgeRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})(
    ({
        size,
        isUnreadBadge,
        mentionStringLength,
    }: ThemedStyledProps<PMentionBadgeRoot, TTheme>): FlattenInterpolation<
        ThemedStyledProps<PMentionBadgeRoot, TTheme>
    > => css`
        display: flex;
        align-items: center;
        justify-content: center;

        ${getBadgeColors};

        ${applyPadding(
            Spacing.symmetric({
                vertical: 0,
                horizontal: isUnreadBadge
                    ? 0
                    : MENTIONBADGE_PADDING_SIZE_MAP[size][mentionStringLength - 1],
            })
        )};

        ${applyShape({
            radius: isUnreadBadge ? 'circle' : 'pill',
            width: isUnreadBadge ? 12 : 'auto',
            height: MENTIONBADGE_HEIGHT_SIZE_MAP[size],
        })};

        ${applyTextStyles({ size: MENTIONBADGE_TEXT_SIZE_MAP[size], weight: 'bold' })};
        ${applyTextMargin({ margin: 'none' })};
    `
);

export default MentionBadgeRoot;
