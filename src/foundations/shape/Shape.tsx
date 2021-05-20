import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../theme-provider/themes/theme.types';
import { Utils } from '../../shared';

import { applyElevation, applyShape } from './Shape.mixins';
import { PShape } from './Shape.props';
import { DEFAULT_SHAPE_BORDER_RADIUS, DEFAULT_SHAPE_ELEVATION_LEVEL } from './Shape.constants';

const Shape = styled.div
    .attrs(({ component, ...rest }: PShape) => ({
        as: component,
        ...rest,
    }))
    .withConfig({
        shouldForwardProp: Utils.forwardProperties(),
    })<ThemedStyledProps<PShape, TTheme>>(
    ({
        radius = DEFAULT_SHAPE_BORDER_RADIUS,
        elevation = DEFAULT_SHAPE_ELEVATION_LEVEL,
        elevationOnHover = elevation,
        width,
        height,
        theme,
    }: ThemedStyledProps<PShape, TTheme>): FlattenSimpleInterpolation => css`
        display: flex;
        background-color: ${theme.background.shape};

        ${applyShape({ width, height, radius })};
        ${applyElevation({ elevation, elevationOnHover }, theme.type === 'dark')};

        z-index: ${elevation || 0};
    `
);

export default Shape;
