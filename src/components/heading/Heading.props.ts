import { ReactNode, ReactNodeArray } from 'react';

import { TTheme } from '../../utilities/theme';

import {
    THeadingSizeToken,
    THeadingElement,
    THeadingColor,
    THeadingWeight,
    THeadingMargin,
} from './Heading.types';

type PHeading = {
    /**
     * which color is the heading rendered with
     * @default 'primary'
     */
    color?: THeadingColor;
    /**
     * define the weight of the rendered font
     * @default 'bold'
     */
    weight?: THeadingWeight;
    /**
     * by default every heading element is rendered with a margin on top and on
     * bottom. by using this property it is possible to either add margin only
     * one side, or to remove the margins completely
     * @default 'both'
     */
    margin?: THeadingMargin;
    /**
     * the size-token used to render the heading
     * @default 100
     */
    size?: THeadingSizeToken;
    /**
     * in some cases it is needed to inherit the parents line-height
     * @default false
     */
    inheritLineHeight?: boolean;
    /**
     * which HTML element should be used for rendering
     * @default 'h6'
     */
    element?: THeadingElement;
    /**
     * custom className
     */
    className?: string;
    children: ReactNode | ReactNodeArray;
};

type PHeadingRoot = Required<Omit<PHeading, 'className' | 'element'>>;

type PApplyHeadingStyles = Pick<PHeading, 'size' | 'inheritLineHeight' | 'element' | 'weight'>;

type PApplyHeadingMargin = Pick<PHeading, 'size' | 'margin'>;

type PApplyHeadingColor = {
    color: THeadingColor;
    theme: TTheme;
};

export type { PHeadingRoot, PApplyHeadingColor, PApplyHeadingMargin, PApplyHeadingStyles };

export default PHeading;
