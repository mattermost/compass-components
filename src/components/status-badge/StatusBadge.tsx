import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import StatusBadgeBase from './StatusBadge.base';
import { DEFAULT_STATUSBADGE_SIZE } from './StatusBadge.constants';
import PStatusBadge from './StatusBadge.props';

const getStatusStyles = ({
    background,
    status,
    theme,
}: ThemedStyledProps<PStatusBadge, TTheme>): FlattenSimpleInterpolation => {
    const color = theme.badges[status];

    return css`
        background-color: ${background};
        color: ${color};
    `;
};

const StatusBadge = styled(StatusBadgeBase).attrs(
    ({ background = 'transparent', size = DEFAULT_STATUSBADGE_SIZE, ...rest }: PStatusBadge) => ({
        background,
        size,
        ...rest,
    })
)<ThemedStyledProps<PStatusBadge, TTheme>>`
    ${getStatusStyles};
`;

export default StatusBadge;
