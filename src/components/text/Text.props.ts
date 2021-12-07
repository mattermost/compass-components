import type { TTheme } from '../../utilities/theme';

import type {
    TTextSizeToken,
    TTextElement,
    TTextColor,
    TTextWeight,
    TTextMargin,
} from './Text.types';

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
     * by default every text element is rendered with a margin on top and on
     * bottom. by using this property it is possible to either add a margin to
     * only one side, or to remove the margins completely
     * @default 'both'
     */
    margin?: TTextMargin;
    /**
     * the size-token used to render
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
    /**
     * custom className
     */
    className?: string;
};

type PTextRoot = Required<Omit<PText, 'element' | 'className'>>;

type PApplyTextStyles = Pick<PText, 'size' | 'inheritLineHeight' | 'element' | 'weight'>;

type PApplyTextMargin = Pick<PText, 'size' | 'margin'>;

type PApplyTextColor = {
    color: TTextColor;
    theme?: TTheme;
};

export type { PTextRoot, PApplyTextColor, PApplyTextMargin, PApplyTextStyles };

export default PText;
