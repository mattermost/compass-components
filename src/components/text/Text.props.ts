import React from 'react';

import { TTextSizeToken, TTextElement, TTextColor, TTextWeight, TTextMargin } from './Text.types';

export type PText = {
    /**
     * which color is the text rendered with
     * @default null
     * */
    color?: TTextColor;
    /** define the weight of the rendered font */
    weight?: TTextWeight;
    /**
     * Every text-element has its own margin.
     * With this you can choose which one to render.
     * @default 'both'
     * */
    margin?: TTextMargin;
    /**
     * the size-token used to render the text size.
     * @default '100'
     * */
    size?: TTextSizeToken;
    /** in some cases it is needed to inherit the parents line-height */
    inheritLineHeight?: boolean;
    /**
     * for text components the options are `p` and `span`
     * @default 'p'
     * */
    element?: TTextElement;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
};

export default PText;
