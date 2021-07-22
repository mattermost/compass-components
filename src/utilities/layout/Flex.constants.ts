import { TFlexAlignment, TFlexElement, TFlexFlex, TFlexJustify } from './Flex.types';

const FLEX_ELEMENTS: TFlexElement[] = [
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

const DEFAULT_FLEX_COMPONENT: TFlexElement = 'div';

const DEFAULT_FLEX_ROW = false;

const DEFAULT_FLEX_WRAP = false;

const DEFAULT_FLEX_FLEX: TFlexFlex = 'initial';

const FLEX_ALIGNMENTS: TFlexAlignment[] = [
    'initial',
    'baseline',
    'flex-start',
    'center',
    'flex-end',
    'stretch',
];

const DEFAULT_FLEX_ALIGNMENT: TFlexAlignment = 'initial';

const FLEX_JUSTIFIES: TFlexJustify[] = [
    'initial',
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
];

const DEFAULT_FLEX_JUSTIFY: TFlexJustify = 'initial';

export {
    FLEX_ELEMENTS,
    DEFAULT_FLEX_COMPONENT,
    DEFAULT_FLEX_ROW,
    DEFAULT_FLEX_WRAP,
    DEFAULT_FLEX_FLEX,
    FLEX_ALIGNMENTS,
    DEFAULT_FLEX_ALIGNMENT,
    FLEX_JUSTIFIES,
    DEFAULT_FLEX_JUSTIFY,
};
