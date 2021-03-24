import {
    TTypographySize,
    TTypographyWeight,
    TTypographyMargin,
    TTypographyElement,
    TTypographyColor,
    TTypographyVariant,
} from './Typography.types';

export type PTypography = {
    className?: string;
    /** the size use to render the text. The actual px values depend on the element as well  */
    size?: TTypographySize;
    /**
     * all valid text tags
     * e.g. `h1` - `h6`, `p`, `span` and `label`
     * */
    element: TTypographyElement;
    /**
     * it is derived from the element:
     *  - `heading` for h1 - h6
     *  - `body` p, span and label
     * */
    variant: TTypographyVariant;
    /**
     * which color is the text rendered with
     * @default 'primary'
     * */
    color?: TTypographyColor;
    /** define the weight of the rendered font */
    weight?: TTypographyWeight;
    /**
     * Every text-element has its own margin.
     * With this you can choose which one to render.
     * @default 'both'
     * */
    margin?: TTypographyMargin;
};
