import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import type { TTheme } from '../../utilities/theme';
import applyElevation from '../../utilities/elevation';
import { applyMargin, applyPadding } from '../../utilities/spacing';
import { Utils } from '../../shared';

import applyShape from './Shape.mixins';
import type { PShapeRoot } from './Shape.props';

const ShapeRoot = styled.div.withConfig<PShapeRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, ['width', 'height', 'radius', 'elevation', 'element']) &&
        validator(property),
})<ThemedStyledProps<PShapeRoot, TTheme>>(
    (props: ThemedStyledProps<PShapeRoot, TTheme>): FlattenSimpleInterpolation => {
        const {
            radius,
            elevation,
            elevationOnHover,
            width,
            height,
            theme,
            padding,
            margin,
            backgroundColor = theme.palette.background.dark,
        } = props;

        return css`
            display: flex;
            background-color: ${backgroundColor};

            ${applyShape({ width, height, radius })};
            ${applyElevation({ elevation, elevationOnHover }, theme.type === 'dark')};

            ${padding && applyPadding(padding)};
            ${margin && applyMargin(margin)};
        `;
    }
);

export default ShapeRoot;
