import React from 'react';

import { TTypographyVariant } from './Typography.types';

type PTypography = {
    /**
     * the variant used here defines which component gets rendered.
     * `inline` renders a `span`, `body` renders a `p`
     * */
    variant: TTypographyVariant;
    /** which color is the text rendered with */
    color?: 'primary' | 'secondary' | 'disabled' | 'accent' | 'contrast';
    /** the size use to render the text. The actual px values depend on the variant as well  */
    size?: number;
    /** when using a header this option renders it in `regular`, not `bold` */
    useRegular?: boolean;
    /**
     * for some components we need to perfectly center the font in the surrounding container (Badges, Buttons, etc.).
     * If used in this context the line-height should be removed and for this use case this property can be used
     * */
    removeLineHeight?: boolean;
    /** every text-variant has its own gutter. With this you can choose to which one to render */
    gutter?: 'none' | 'top' | 'bottom' | 'both';
    children?: React.ReactNode | React.ReactNode[];
};

type PStyledTypography = Pick<PTypography, 'size' | 'color' | 'gutter' | 'removeLineHeight'> & {
    weight: number;
    type: string;
};

export type { PTypography, PStyledTypography };
