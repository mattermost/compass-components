import { PTypography } from '../../foundations/typography';

import { TTextSize, TTextElement } from './Text.types';

export type PText = Pick<PTypography, 'color' | 'margin' | 'weight'> & {
    /** the size-token used to render the text size. */
    size?: TTextSize;
    /** for text components the options are `p` and `span` */
    element?: TTextElement;
    className?: string;
};
