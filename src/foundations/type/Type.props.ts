import { TTypeSize, TTypeWeight, TTypeMargin, TTypeElement, TTypeColor } from './Type.types';

export type PType = {
    className?: string;
    /** the size use to render the text. The actual px values depend on the element as well  */
    size?: TTypeSize;
    /**
     * it is derived from the element:
     *  - `heading` for h1 - h6
     *  - `body` p and span
     * */
    element: TTypeElement;
    /**
     * which color is the text rendered with
     * @default 'primary'
     * */
    color?: TTypeColor;
    /** define the weight of the rendered font */
    weight?: TTypeWeight;
    /**
     * Every text-element has its own margin.
     * With this you can choose which one to render.
     * @default 'both'
     * */
    margin?: TTypeMargin;
};
