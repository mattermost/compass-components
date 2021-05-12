import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import MentionBadgeBase from './MentionBadge.base';
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

const MentionBadge = styled(MentionBadgeBase)<ThemedStyledProps<PMentionBadge, TTheme>>`
    ${getBadgeColors};
`;

export default MentionBadge;
