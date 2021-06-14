import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../theme-provider/themes/theme.types';
import { Utils } from '../../shared';

import { applyElevation, applyShape } from './Shape.mixins';
import { PShapeRoot } from './Shape.props';

const ShapeRoot = styled.div.withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<ThemedStyledProps<PShapeRoot, TTheme>>(
    ({
        radius,
        elevation,
        elevationOnHover,
        width,
        height,
        theme,
    }: ThemedStyledProps<PShapeRoot, TTheme>): FlattenSimpleInterpolation => css`
        display: flex;
        background-color: ${theme.background.shape};

        ${applyShape({ width, height, radius })};
        ${applyElevation({ elevation, elevationOnHover }, theme.type === 'dark')};

        z-index: ${elevation || 0};
    `
);

export default ShapeRoot;
