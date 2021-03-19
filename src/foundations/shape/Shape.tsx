import clsx from 'clsx';
import styled from 'styled-components';

import { getBorderRadius, getElevation } from '../theme-provider/global-styles/globalStyles';

import PShape from './Shape.props';

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

const getBorderDefinition = (props: PShape): string => {
    const { borderColor = 'var(--default-border-color)', borderWidth } = props;

    if (borderColor && borderWidth) {
        return `border: ${borderWidth}px solid ${borderColor}`;
    }

    return '';
};

const Shape = styled.div.withConfig({
    // this is to prevent all properties to being passed down to the underlying
    // component, except for the ones we want to having them passe down
    shouldForwardProp: (property) =>
        !['width', 'height', 'elevation', 'borderRadius'].includes(property),
})<PShape>`
    flex: ${(props): string => (props.width ? 'initial' : 'auto')};
    display: flex;
    flex-direction: column;
    background-color: ${(props): string =>
        props.background ? props.background : 'var(--shape-background-color)'};
    border-radius: ${(props): string => getBorderRadius(props.borderRadius)};
    box-shadow: ${(props): string => getElevation(props.elevation)};
    ${getBorderDefinition};
    ${getShapeDimensions};
    z-index: ${(props): number => props.elevation || 0};
    transition: box-shadow 500ms ease-in-out;

    &:hover {
        box-shadow: ${(props): string => getElevation(props.elevationOnHover)};
    }
`;

export default Shape;
