import styled, { css } from 'styled-components';
import {
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemedStyledProps,
} from 'styled-components/ts3.6';

import { applyShape } from '../../foundations/shape/Shape.mixins';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import StatusBadgeBase from './StatusBadge.base';
import { DEFAULT_STATUSBADGE_SIZE, STATUSBADGE_SIZE_MAP } from './StatusBadge.constants';
import PStatusBadge from './StatusBadge.props';

const getStatusStyles = ({
    background,
    status,
    theme,
}: ThemedStyledProps<PStatusBadge, TTheme>): FlattenSimpleInterpolation => {
    const color = theme.badges[status];

    return css`
        background-color: ${background || theme.background.default};
        color: ${color};
    `;
};

// width={STATUSBADGE_SIZE_MAP[size] + 4} radius={'circle'}

const StatusBadge = styled(StatusBadgeBase).attrs(
    ({ size = DEFAULT_STATUSBADGE_SIZE, ...rest }: PStatusBadge) => ({
        size,
        ...rest,
    })
)<ThemedStyledProps<PStatusBadge, TTheme>>(
    ({
        size = DEFAULT_STATUSBADGE_SIZE,
    }: ThemedStyledProps<PStatusBadge, TTheme>): FlattenInterpolation<
        ThemedStyledProps<PStatusBadge, TTheme>
    > => css`
        ${getStatusStyles};
        ${applyShape({ width: STATUSBADGE_SIZE_MAP[size] + 4, radius: 'circle' })};

        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    `
);

export default StatusBadge;
