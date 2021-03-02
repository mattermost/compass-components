import React from 'react';

import { SShape } from './Shape.styles';
import { TBorderRadiusSizes, TElevationLevel } from './Shape.types';
import { isColor } from '../utils/utils';

export type PShape = {
    /** The border-radius */
    borderRadius?: TBorderRadiusSizes;
    elevation?: TElevationLevel;
    component?: 'div' | 'span' | 'section' | 'aside';
    width?: number;
    height?: number;
    background?: string;
    children?: React.ReactNode;
};

const Shape = ({ borderRadius = 0, component = 'div', elevation = 0, children, ...rest }: PShape) => {
    const getStyle = (): React.CSSProperties => {
        const style = {
            '--panel-width': 'auto',
            '--panel-height': 'auto',
            '--panel-background': '#FFF',
        };
        if (rest.width) style['--panel-width'] = `${rest.width}px`;
        if (rest.height) style['--panel-height'] = `${rest.height}px`;
        if (borderRadius === 'circle') style['--panel-height'] = `${rest.width}px`;
        if (rest.background && isColor(rest.background)) style['--panel-background'] = rest.background;
        return style as React.CSSProperties;
    };

    return (
        <SShape as={component} borderRadius={borderRadius} elevation={elevation} style={getStyle()}>
            {children}
        </SShape>
    );
};

export default Shape;
