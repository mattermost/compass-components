import React from 'react';

import { isValidColor } from '../../utils';

import SShape from './Shape.styles';
import { TBorderRadiusSizes, TElevationLevel } from './Shape.types';

type PShape = {
    /** The border-radius size */
    borderRadius?: TBorderRadiusSizes;
    /** Should a border be rendered */
    border?: boolean;
    /**
     * Elevation refers to the z-index depth that an element sits on.
     * The base Elevation is 0 and has no depth.
     * Subsequent layers increment this Elevation value.
     * In total, there are 6 Elevation levels, not including the base level 0.
     * */
    elevation?: TElevationLevel;
    /** Which component should be used for rendering the Shape */
    component?: 'div' | 'span' | 'section' | 'aside';
    /** set a custom width */
    width?: number | string | 'auto';
    /**
     * set a custom height. When `borderRadius` is set to `'circle'`,
     * `height` will be set from `width`
     * */
    height?: number | string | 'auto';
    /** set a custom padding */
    padding?: number | number[];
    /** set a custom background color */
    background?: string;
    children?: React.ReactNode;
};

const Shape = ({
    border = false,
    borderRadius = 0,
    component = 'div',
    elevation = 0,
    background = '#FFF',
    width = 'auto',
    height = 'auto',
    padding = 0,
    children,
}: PShape) => {
    const getStyle = (): React.CSSProperties => {
        const style = {
            '--shape-width': 'auto',
            '--shape-height': 'auto',
            '--shape-padding': '0',
            '--shape-background': '#FFF',
        };

        if (width) {
            style['--shape-width'] = typeof width === 'number' ? `${width}px` : width;
        }

        if (height) {
            style['--shape-height'] = typeof height === 'number' ? `${height}px` : height;
        }

        if (borderRadius === 'circle') {
            style['--shape-height'] = style['--shape-width'];
        }

        if (padding) {
            if (Array.isArray(padding)) {
                style['--shape-padding'] = padding
                    .slice(0, 4)
                    .map(s => `${s}px`)
                    .join(' ');
            } else {
                style['--shape-padding'] = `${padding}px`;
            }
        }

        if (background && isValidColor(background)) {
            style['--shape-background'] = background;
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
