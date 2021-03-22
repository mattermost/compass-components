import { PType } from '../../foundations/type';

import { TTextSize, TTextVariant, TTextWeight } from './Text.types';

export type PText = Pick<PType, 'color' | 'gutter'> & {
    className?: string;
    /**
     * the size-token used to render the text size.
     * @default '100'
     * */
    size?: TTextSize;
    /**
     * for text components the options are `p` and `span`
     * @default 'p'
     * */
    variant?: TTextVariant;
    /**
     * define the weight of the rendered text
     * @default 'regular'
     * */
    weight?: TTextWeight;
};
