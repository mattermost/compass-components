import { TGridAlignment, TGridElement, TGridFlex, TGridJustify } from './Grid.types';

const GRID_ELEMENTS: TGridElement[] = [
    'div',
    'span',
    'article',
    'aside',
    'details',
    'figcaption',
    'figure',
    'footer',
    'header',
    'main',
    'mark',
    'nav',
    'section',
    'summary',
    'time',
    'ul',
    'li',
];

const DEFAULT_GRID_COMPONENT: TGridElement = 'div';

const DEFAULT_GRID_ROW = false;

const DEFAULT_GRID_WRAP = false;

const DEFAULT_GRID_FLEX: TGridFlex = 'initial';

const GRID_ALIGNMENTS: TGridAlignment[] = [
    'initial',
    'flex-start',
    'center',
    'flex-end',
    'stretch',
];

const DEFAULT_GRID_ALIGNMENT: TGridAlignment = 'initial';

const GRID_JUSTIFIES: TGridJustify[] = [
    'initial',
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
];

const DEFAULT_GRID_JUSTIFY: TGridJustify = 'initial';

export {
    GRID_ELEMENTS,
    DEFAULT_GRID_COMPONENT,
    DEFAULT_GRID_ROW,
    DEFAULT_GRID_WRAP,
    DEFAULT_GRID_FLEX,
    GRID_ALIGNMENTS,
    DEFAULT_GRID_ALIGNMENT,
    GRID_JUSTIFIES,
    DEFAULT_GRID_JUSTIFY,
};
