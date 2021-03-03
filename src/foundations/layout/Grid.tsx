import React from 'react';

import SGrid from './Grid.styles';

type PGrid = {
    row?: boolean;
    flex?: number;
    component?: 'div' | 'span' | 'section' | 'aside';
    alignment?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'stretch';
    padding?: number | number[];
    children?: React.ReactNode;
};

const Grid = ({ row = false, component = 'div', children, ...rest }: PGrid) => {
    const getStyle = (): React.CSSProperties => {
        const style = {
            '--grid-flex': '1',
            '--grid-align': 'start',
            '--grid-justify': 'start',
            '--grid-padding': '0',
        };

        if (rest.alignment) {
            style['--grid-align'] = rest.alignment;
        }

        if (rest.justify) {
            style['--grid-justify'] = rest.justify;
        }

        if (rest.padding) {
            if (Array.isArray(rest.padding)) {
                style['--grid-padding'] = rest.padding
                    .slice(0, 4)
                    .map(s => `${s}px`)
                    .join(' ');
            } else {
                style['--grid-padding'] = `${rest.padding}px`;
            }
        }

        if (rest.flex || rest.flex === 0) {
            style['--grid-flex'] = `${rest.flex}`;
        }

        return style as React.CSSProperties;
    };

    return (
        <SGrid row={row} as={component} style={getStyle()}>
            {children}
        </SGrid>
    );
};

export default Grid;

export type { PGrid };
