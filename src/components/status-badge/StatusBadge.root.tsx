import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import { STATUSICON_SIZE_MAP } from '../status-icon';
import { applyShape } from '../../foundations/shape';
import type { TTheme } from '../../utilities/theme';
import { Utils } from '../../shared';

import type { PStatusBadgeRoot } from './StatusBadge.props';

const StatusBadgeRoot = styled.div.withConfig({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})(
    ({
        theme,
        size,
        background = theme.background.default,
    }: ThemedStyledProps<PStatusBadgeRoot, TTheme>): FlattenSimpleInterpolation => css`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${background};

        ${applyShape({ width: STATUSICON_SIZE_MAP[size] + 4, radius: 'circle' })};
    `
);

export default StatusBadgeRoot;
