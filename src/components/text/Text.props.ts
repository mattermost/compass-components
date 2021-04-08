import { PTypography } from '../../foundations/typography';

import { TTextSize, TTextElement } from './Text.types';

export type PText = Pick<PTypography, 'color' | 'margin' | 'weight'> & {
    className?: string;
    /**
     * the size-token used to render the text size.
     * @default '100'
     * */
    size?: TTextSize;
    /** in some cases it is needed to inherit the parents line-height */
    inheritLineHeight?: boolean;
    /**
     * for text components the options are `p` and `span`
     * @default 'p'
     * */
    element?: TTextElement;
};

export default PText;
