import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import StatusBadgeBase from './StatusBadge.base';
import PStatusBadge from './StatusBadge.props';

const getStatusColor = ({
    status,
    size,
    theme,
}: ThemedStyledProps<PStatusBadge, TTheme>): FlattenSimpleInterpolation => {
    const color = theme.badges[status];
    const borderColor = status === 'offline' ? color : 'transparent';
    const borderWidth = size && size > 18 ? 3 : 2;

    return css`
        background-color: transparent;
        color: ${color};
        outline: ${borderWidth} transparent;
        border: ${`${borderWidth}px solid ${borderColor}`};
    `;
};

const StatusBadge = styled(StatusBadgeBase)<ThemedStyledProps<PStatusBadge, TTheme>>`
    ${getStatusColor};
`;

export default StatusBadge;
