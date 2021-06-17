import styled, { css } from 'styled-components';
import { FlattenInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyShape } from '../../foundations/shape';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { Utils } from '../../shared';

import { STATUSBADGE_SIZE_MAP } from './StatusBadge.constants';
import { PStatusBadgeRoot } from './StatusBadge.props';

const StatusBadgeRoot = styled.div
    .withConfig({
        shouldForwardProp: Utils.forwardProperties(),
    })
    .attrs(({ theme }: ThemedStyledProps<PStatusBadgeRoot, TTheme>) => ({
        background: theme.background.default,
    }))<ThemedStyledProps<PStatusBadgeRoot, TTheme>>(
    ({
        size,
        status,
        background,
        theme,
    }: ThemedStyledProps<PStatusBadgeRoot, TTheme>): FlattenInterpolation<
        ThemedStyledProps<PStatusBadgeRoot, TTheme>
    > => {
        const color = theme.badges[status];

        return css`
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            background-color: ${background};
            color: ${color};

            ${applyShape({ width: STATUSBADGE_SIZE_MAP[size] + 4, radius: 'circle' })};
        `;
    }
);

export default StatusBadgeRoot;
