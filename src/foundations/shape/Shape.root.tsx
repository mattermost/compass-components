import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../utilities/theme';
import { Utils } from '../../shared';

import { applyElevation, applyShape } from './Shape.mixins';
import { PShapeRoot } from './Shape.props';

const ShapeRoot = styled.div.withConfig<PShapeRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})<ThemedStyledProps<PShapeRoot, TTheme>>(
    ({
        radius,
        elevation,
        elevationOnHover,
        width,
        height,
        theme,
        backgroundColor = theme.background.shape,
    }: ThemedStyledProps<PShapeRoot, TTheme>): FlattenSimpleInterpolation => css`
        display: flex;
        background-color: ${backgroundColor};

        ${applyShape({ width, height, radius })};
        ${applyElevation({ elevation, elevationOnHover }, theme.type === 'dark')};

        z-index: ${elevation || 0};
    `
);

export default ShapeRoot;
