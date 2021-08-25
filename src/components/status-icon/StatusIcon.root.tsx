import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import Icon from '../../foundations/icon';
import { TTheme } from '../../utilities/theme';
import { Utils } from '../../shared';

import { PStatusIconRoot } from './StatusIcon.props';

const StatusIconRoot = styled(Icon).withConfig({
    shouldForwardProp: (property, validator) =>
        Utils.forceForwardProperty(property, ['glyph', 'size']) ||
        (Utils.blockProperty(property) && validator(property)),
})(
    ({
        theme,
        status,
    }: ThemedStyledProps<PStatusIconRoot, TTheme>): FlattenSimpleInterpolation => css`
        color: ${theme.badges[status]};
    `
);

export default StatusIconRoot;
