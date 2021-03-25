import { PTypography } from '../../foundations/typography';

import { TTextSize, TTextElement } from './Text.types';

export type PText = Pick<PTypography, 'color' | 'margin' | 'weight'> & {
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
};
