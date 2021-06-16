import { TTagVariant, TTagSizeToken } from './Tag.types';

type PTag = {
    variant: TTagVariant;
    text: string;
    size?: TTagSizeToken;
    onClick?: () => void;
    className?: string;
};

export type PTagRoot = Required<Pick<PTag, 'variant' | 'text' | 'size'>>;

export default PTag;
