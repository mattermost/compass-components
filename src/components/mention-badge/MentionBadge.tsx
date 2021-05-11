import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha } from '../../shared';

import MentionBadgeBase from './MentionBadge.base';
import PMentionBadge from './MentionBadge.props';

const getBadgeColors = ({
    location,
    theme,
}: ThemedStyledProps<PMentionBadge, TTheme>): FlattenSimpleInterpolation => {
    if (location === 'sidebar') {
        return css`
            color: ${theme.palette.primary.main};
        `;
    }

    return css`
        color: ${theme.text.contrast};
        background-color: ${setAlpha(theme.background.badge, 0.48)};
    `;
};

const MentionBadge = styled(MentionBadgeBase)<ThemedStyledProps<PMentionBadge, TTheme>>`
    ${getBadgeColors};
`;

export default MentionBadge;
