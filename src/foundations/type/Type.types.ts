type TBodySize = 25 | 50 | 75 | 100 | 200 | 300;

type TTypeSize = TBodySize | 400 | 500 | 600 | 700 | 1000;

type TTypeHeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TTypeBodyVariant = 'p' | 'span';

type TTypeVariant = TTypeHeadingVariant | TTypeBodyVariant;

type TTypeType = 'heading' | 'body';

type TTypeWeight = 'light' | 'regular' | 'bold';

type TTypeGutter = 'none' | 'top' | 'bottom' | 'both';

type TTypeColor = 'primary' | 'secondary' | 'disabled';

export type {
    TBodySize,
    TTypeSize,
    TTypeType,
    TTypeWeight,
    TTypeGutter,
    TTypeHeadingVariant,
    TTypeBodyVariant,
    TTypeVariant,
    TTypeColor,
};
