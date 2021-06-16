import { TTextSizeToken } from '../text/Text.types';

import { TTagVariant } from './Tag.types';

type PTag = {
    variant: TTagVariant;
    text: string;
    size?: TTextSizeToken;
    onClick?: () => void;
    className?: string;
};

export type PTagRoot = Omit<PTag, 'onClick' | 'className'>;

export default PTag;
