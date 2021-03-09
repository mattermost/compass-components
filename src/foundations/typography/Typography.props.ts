import React from 'react';

import { TTypographyVariant } from './Typography.types';

type PTypography = {
    /**
     * the variant used here defines which component gets rendered.
     * `inline` renders a `span`, `body` renders a `p`
     * */
    variant: TTypographyVariant;
    /** which color is the text rendered with */
    color?: 'primary' | 'secondary';
    /** the size use to render the text. The actual px values depend on the variant as well  */
    size?: number;
    /** when using a header this option renders it in `regular`, not `bold` */
    useRegular?: boolean;
    /** every text-variant has its own gutter. With this you can choose to which one to render */
    gutter?: 'none' | 'top' | 'bottom' | 'both';
    children?: React.ReactNode | React.ReactNode[];
};

type PStyledTypography = Pick<PTypography, 'size' | 'color' | 'gutter'> & {
    weight: number;
    type: string;
};

export type { PTypography, PStyledTypography };
