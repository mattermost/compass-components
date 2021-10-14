import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import applyElevation from '../../utilities/elevation';
import { applyMargin, applyPadding } from '../../utilities/spacing';
import { TTheme } from '../../utilities/theme';
import { Utils } from '../../shared';

import applyShape from './Shape.mixins';
import { PShapeRoot } from './Shape.props';

const ShapeRoot = styled.div.withConfig<PShapeRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, ['width', 'height', 'radius', 'elevation', 'element']) &&
        validator(property),
})<ThemedStyledProps<PShapeRoot, TTheme>>(
    ({
        radius,
        elevation,
        elevationOnHover,
        width,
        height,
        theme,
        padding,
        margin,
        backgroundColor = theme.background.shape,
    }: ThemedStyledProps<PShapeRoot, TTheme>): FlattenSimpleInterpolation => css`
        display: flex;
        background-color: ${backgroundColor};

        ${applyShape({ width, height, radius })};
        ${applyElevation({ elevation, elevationOnHover }, theme.type === 'dark')};

        ${padding && applyPadding(padding)};
        ${margin && applyMargin(margin)};
    `
);

export default ShapeRoot;
