import React from 'react';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import { TTextSizeToken, TTextElement, TTextColor, TTextWeight, TTextMargin } from './Text.types';

type PText = {
    /** which color is the text rendered with */
    color?: TTextColor;
    /** define the weight of the rendered font */
    weight?: TTextWeight;
    /**
     * Every text-element has its own margin.
     * With this you can choose which one to render.
     * */
    margin?: TTextMargin;
    /** the size-token used to render the text size. */
    size?: TTextSizeToken;
    /** in some cases it is needed to inherit the parents line-height */
    inheritLineHeight?: boolean;
    /** which HTML element should be used for rendering */
    element?: TTextElement;
    for?: string;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
};

type PApplyTextStyles = Pick<PText, 'size' | 'inheritLineHeight' | 'element' | 'weight'>;

type PApplyTextMargin = Pick<PText, 'size' | 'margin'>;

type PApplyTextColor = {
    color: TTextColor;
    theme: TTheme;
};

export type { PApplyTextColor, PApplyTextMargin, PApplyTextStyles };

export default PText;
