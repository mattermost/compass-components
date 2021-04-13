type TTypographySize = TTypographyBodySize | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

type TTypographyBodySize = 25 | 50 | 75 | 100 | 200 | 300;

type TTypographyElement = TTypographyHeadingElement | TTypographyBodyElement;

type TTypographyBodyElement = 'p' | 'span' | 'label';

type TTypographyHeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TTypographyType = 'heading' | 'body';

type TTypographyWeight = 'light' | 'regular' | 'bold';

type TTypographyMargin = 'none' | 'top' | 'bottom' | 'both' | 'all';

type TTypographyColor = 'primary' | 'secondary' | 'disabled' | 'contrast' | 'accent';

export type {
    TTypographySize,
    TTypographyBodySize,
    TTypographyElement,
    TTypographyBodyElement,
    TTypographyHeadingElement,
    TTypographyType,
    TTypographyWeight,
    TTypographyMargin,
    TTypographyColor,
};
