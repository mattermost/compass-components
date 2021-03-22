import { PType } from '../../foundations/type';

import { THeadingSize, THeadingVariant } from './Heading.types';

export type PHeading = Pick<PType, 'color' | 'gutter' | 'weight'> & {
    className?: string;
    size?: THeadingSize;
    variant?: THeadingVariant;
};
