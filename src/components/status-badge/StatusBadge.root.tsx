import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { STATUSICON_SIZE_MAP } from '../status-icon';
import { applyShape } from '../../foundations/shape';
import { TTheme } from '../../utilities/theme';
import { Utils } from '../../shared';

import { PStatusBadgeRoot } from './StatusBadge.props';

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
