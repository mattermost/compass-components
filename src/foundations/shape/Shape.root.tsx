import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import applyElevation from '../../utilities/elevation';
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
        backgroundColor = theme.background.shape,
    }: ThemedStyledProps<PShapeRoot, TTheme>): FlattenSimpleInterpolation => css`
        display: flex;
        background-color: ${backgroundColor};

        ${applyShape({ width, height, radius })};
        ${applyElevation({ elevation, elevationOnHover }, theme.type === 'dark')};
    `
);

export default ShapeRoot;
