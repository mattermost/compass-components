import { TTypeSize, TTypeWeight, TTypeMargin, TTypeVariant, TTypeColor } from './Type.types';

export type PType = {
    className?: string;
    /** the size use to render the text. The actual px values depend on the variant as well  */
    size?: TTypeSize;
    /**
     * it is derived from the variant:
     *  - `heading` for h1 - h6
     *  - `body` p and span
     * */
    variant: TTypeVariant;
    /**
     * which color is the text rendered with
     * @default 'primary'
     * */
    color?: TTypeColor;
    /** define the weight of the rendered font */
    weight?: TTypeWeight;
    /**
     * Every text-variant has its own margin.
     * With this you can choose which one to render.
     * @default 'both'
     * */
    margin?: TTypeMargin;
};
