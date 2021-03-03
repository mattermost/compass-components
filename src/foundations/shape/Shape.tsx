import React from 'react';

import { isValidColor } from '../../utils';

import SShape from './Shape.styles';
import { TBorderRadiusSizes, TElevationLevel } from './Shape.types';

type PShape = {
    /** The border-radius size */
    borderRadius?: TBorderRadiusSizes;
    /**
     * Elevation refers to the z-index depth that an element sits on.
     * The base Elevation is 0 and has no depth.
     * Subsequent layers increment this Elevation value.
     * In total, there are 6 Elevation levels, not including the base level 0.
     * */
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

        if (rest.width) {
            style['--panel-width'] = `${rest.width}px`;
        }

        if (rest.height) {
            style['--panel-height'] = `${rest.height}px`;
        }

        if (borderRadius === 'circle') {
            style['--panel-height'] = `${rest.width}px`;
        }

        if (rest.background && isValidColor(rest.background)) {
            style['--panel-background'] = rest.background;
        }

        return style as React.CSSProperties;
    };

    return (
        <SShape as={component} borderRadius={borderRadius} elevation={elevation} style={getStyle()}>
            {children}
        </SShape>
    );
};

export default Shape;
export type { PShape };
