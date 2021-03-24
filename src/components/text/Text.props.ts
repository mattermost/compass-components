import { PType } from '../../foundations/type';

import { TTextSize, TTextElement, TTextWeight } from './Text.types';

export type PText = Pick<PType, 'color' | 'margin'> & {
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
    element?: TTextElement;
    /**
     * define the weight of the rendered text
     * @default 'regular'
     * */
    weight?: TTextWeight;
};
