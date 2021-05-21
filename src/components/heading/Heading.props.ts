import React from 'react';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { TTextColor } from '../text';

import {
    THeadingSizeToken,
    THeadingElement,
    THeadingColor,
    THeadingWeight,
    THeadingMargin,
} from './Heading.types';

type PHeading = {
    /** in some cases it is needed to inherit the parents line-height */
    inheritLineHeight?: boolean;
    /**
     * which color is the text rendered with */
    color?: THeadingColor;
    /** define the weight of the rendered font */
    weight?: THeadingWeight;
    /**
     * Every text-element has its own margin.
     * With this you can choose which one to render.
     * */
    margin?: THeadingMargin;
    /**
     * the size-token used to render the text size.
     *
     * There is a default for a case where `element` is not manually set as well
     * */
    size?: THeadingSizeToken;
    /**
     * for heading components the range is `h1` - `h6`.
     * If not set manually set it derives the element from the size
     * */
    element?: THeadingElement;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
};

type PApplyHeadingStyles = Required<
    Pick<PHeading, 'size' | 'inheritLineHeight' | 'element' | 'weight'>
>;

type PApplyHeadingMargin = Required<Pick<PHeading, 'size' | 'margin'>>;

type PApplyHeadingColor = {
    color: TTextColor;
    theme: TTheme;
};

export type { PApplyHeadingColor, PApplyHeadingMargin, PApplyHeadingStyles };

export default PHeading;
