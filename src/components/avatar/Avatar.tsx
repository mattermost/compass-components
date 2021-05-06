import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import AvatarBase from './Avatar.base';
import PAvatar from './Avatar.props';

const getAvatarStyles = (
    props: ThemedStyledProps<PAvatar, TTheme>
): FlattenSimpleInterpolation => css`
    color: ${props.theme.text.primary};
`;

const Avatar = styled(AvatarBase)<PAvatar>`
    ${getAvatarStyles}
`;

export default Avatar;
