import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import IconButtonBase from './IconButton.base';
import { DEFAULT_ICON_BUTTON_SIZE, ICON_BUTTON_DEFINITIONS } from './IconButton.constants';
import PIconButton from './IconButton.props';

const IconButton = styled(IconButtonBase)<PIconButton>(
    ({
        size = DEFAULT_ICON_BUTTON_SIZE,
        theme,
    }: ThemedStyledProps<PIconButton, TTheme>): FlattenSimpleInterpolation => css`
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${theme.text.primary};

        width: ${ICON_BUTTON_DEFINITIONS[size]}px;
        height: ${ICON_BUTTON_DEFINITIONS[size]}px;
    `
);

export default IconButton;
