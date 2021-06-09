import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyShape } from '../../foundations/shape/Shape.mixins';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { applyTextStyles } from '../text/Text.mixins';

import { DEFAULT_ICON_BUTTON_SIZE, ICON_BUTTON_DEFINITIONS } from './IconButton.constants';
import { PIconButtonRoot } from './IconButton.props';

const IconButtonRoot = styled.button<PIconButtonRoot>(
    ({
        size = DEFAULT_ICON_BUTTON_SIZE,
        theme,
    }: ThemedStyledProps<PIconButtonRoot, TTheme>): FlattenSimpleInterpolation => css`
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${theme.text.primary};

        width: ${ICON_BUTTON_DEFINITIONS[size]}px;
        height: ${ICON_BUTTON_DEFINITIONS[size]}px;

        background-color: grey;

        ${applyShape({ width: 100, height: 100, radius: 4 })};
        ${applyTextStyles({ size: 300 })};

        :hover {
            background-color: darkred;
            ${applyTextStyles({ weight: 'bold' })};
        }
    `
);

export default IconButtonRoot;
