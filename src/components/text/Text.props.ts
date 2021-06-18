import { ReactNode } from 'react';

import { TTheme } from '../../utilities/theme';

import { TTextSizeToken, TTextElement, TTextColor, TTextWeight, TTextMargin } from './Text.types';

type PText = {
    /**
     * which color is the text rendered with
     * @default 'primary'
     */
    color?: TTextColor;
    /**
     * define the weight of the rendered font
     * @default 'regular'
     */
    weight?: TTextWeight;
    /**
     * Every text-element has its own margin.
     * With this you can choose which one to render.
     * @default 'both'
     */
    margin?: TTextMargin;
    /**
     * the size-token used to render the text size.
     * @default 100
     */
    size?: TTextSizeToken;
    /**
     * in some cases it is needed to inherit the parents line-height
     * @default false
     */
    inheritLineHeight?: boolean;
    /**
     * which HTML element should be used for rendering
     * @default 'p'
     */
    element?: TTextElement;
    className?: string;
    children: ReactNode | ReactNode[];
};

type PTextRoot = Required<Omit<PText, 'element' | 'className'>>;

type PApplyTextStyles = Pick<PText, 'size' | 'inheritLineHeight' | 'element' | 'weight'>;

type PApplyTextMargin = Pick<PText, 'size' | 'margin'>;

type PApplyTextColor = {
    color: TTextColor;
    theme: TTheme;
};

export type { PTextRoot, PApplyTextColor, PApplyTextMargin, PApplyTextStyles };

export default PText;
