import { TTypeSize, TTypeWeight, TTypeGutter, TTypeVariant } from './Type.types';

export type PType = {
    className?: string;
    /** the size use to render the text. The actual px values depend on the variant as well  */
    size?: TTypeSize;
    /**
     * can be `heading` for h1 - h6 and `body` for rendering a p tag
     * */
    variant: TTypeVariant;
    /** which color is the text rendered with */
    color?: 'primary' | 'secondary' | 'disabled';
    /** define the weight of the rendered font */
    weight?: TTypeWeight;
    /** every text-variant has its own gutter. With this you can choose which one to render */
    gutter?: TTypeGutter;
};
