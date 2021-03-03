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
    padding?: number | number[];
    background?: string;
    border?: boolean;
    children?: React.ReactNode;
};

const Shape = ({ border = false, borderRadius = 0, component = 'div', elevation = 0, children, ...rest }: PShape) => {
    const getStyle = (): React.CSSProperties => {
        const style = {
            '--shape-width': 'auto',
            '--shape-height': 'auto',
            '--shape-padding': '0',
            '--shape-background': '#FFF',
        };

        if (rest.width) {
            style['--shape-width'] = `${rest.width}px`;
        }

        if (rest.height) {
            style['--shape-height'] = `${rest.height}px`;
        }

        if (borderRadius === 'circle') {
            style['--shape-height'] = `${rest.width}px`;
        }

        if (rest.padding) {
            if (Array.isArray(rest.padding)) {
                style['--shape-padding'] = rest.padding
                    .slice(0, 4)
                    .map(s => `${s}px`)
                    .join(' ');
            } else {
                style['--shape-padding'] = `${rest.padding}px`;
            }
        }

        if (rest.background && isValidColor(rest.background)) {
            style['--shape-background'] = rest.background;
        }

        return style as React.CSSProperties;
    };

    return (
        <SShape as={component} borderRadius={borderRadius} elevation={elevation} border={border} style={getStyle()}>
            {children}
        </SShape>
    );
};

export default Shape;
export type { PShape };
