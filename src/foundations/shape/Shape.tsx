import styled from 'styled-components';
import { ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../theme-provider/themes/theme.types';
import { Utils } from '../../utils';

import PShape from './Shape.props';
import { DEFAULT_SHAPE_BORDER_RADIUS, DEFAULT_SHAPE_ELEVATION_LEVEL } from './Shape.constants';
import { TShapeBorderRadius } from './Shape.types';

const getPxValue = (value: string | number): string =>
    typeof value === 'number' ? `${value}px` : getPercentageValue(value);

const getPercentageValue = (value: string): string => (value.endsWith('%') ? value : '');

const getShapeDimensions = (props: PShape): string => {
    if (props.borderRadius === 'circle' && (!props.width || typeof props.width !== 'number')) {
        throw new TypeError(
            'SHAPE: When choosing `circle` as value for `borderRadius` the width needs to be a number'
        );
    }

    if (props.borderRadius === 'circle' && props.width) {
        return `width: ${getPxValue(props.width)}; height: ${getPxValue(props.width)};`;
    }

    const width = props.width ? `width: ${getPxValue(props.width)};` : '';
    const height = props.height ? `height: ${getPxValue(props.height)};` : '';

    return width + height;
};

const getBorderRadius = (radius: TShapeBorderRadius): string => {
    if (Utils.isString(radius)) {
        return radius === 'circle' ? '50%' : '10000px';
    }

    return `${radius}px`;
};

const Shape = styled.div
    // ignoring the className property prevents duplicate classes to be added to the HTML element
    .attrs(
        ({
            component,
            borderRadius,
            elevation,
            elevationOnHover,
            className: ignoreClassName,
            ...rest
        }: PShape) => ({
            as: component,
            borderRadius: borderRadius || DEFAULT_SHAPE_BORDER_RADIUS,
            elevation: elevation || DEFAULT_SHAPE_ELEVATION_LEVEL,
            elevationOnHover: elevationOnHover || DEFAULT_SHAPE_ELEVATION_LEVEL,
            ...rest,
        })
    )
    .withConfig({
        shouldForwardProp: Utils.forwardProperties(),
    })<ThemedStyledProps<PShape, TTheme>>`
    display: flex;
    flex: ${(props): string => (props.width ? 'initial' : 'auto')};

    border-radius: ${(props): string => getBorderRadius(props.borderRadius)};

    ${getShapeDimensions};

    z-index: ${(props): number => props.elevation || 0};
`;

export default Shape;
