import React from 'react';

import SGrid from './Grid.styles';
import { TSpacing } from './Spacing';

type PGrid = {
    row?: boolean;
    flex?: number;
    component?: 'div' | 'span' | 'section' | 'aside';
    alignment?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-evenly';
    padding?: TSpacing;
    children?: React.ReactNode;
};

const Grid: React.FC<PGrid> = ({
    row = false,
    component = 'div',
    children,
    ...rest
}: PGrid): JSX.Element => {
    const getStyle = (): React.CSSProperties => {
        const style = {
            '--grid-flex': '1',
            '--grid-align': 'start',
            '--grid-justify': 'start',
            '--grid-padding': rest.padding?.parseSpacing() || '0',
        };

        if (rest.alignment) {
            style['--grid-align'] = rest.alignment;
        }

        if (rest.justify) {
            style['--grid-justify'] = rest.justify;
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
