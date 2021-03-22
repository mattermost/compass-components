import { PType } from '../../foundations/type';

import { TTextSize, TTextVariant, TTextWeight } from './Text.types';

export type PText = Pick<PType, 'color' | 'gutter'> & {
    className?: string;
    size?: TTextSize;
    variant?: TTextVariant;
    weight?: TTextWeight;
};
