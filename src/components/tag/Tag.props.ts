import { TTagVariant, TTagSizeToken } from './Tag.types';

type PTag = {
    /**
     * the variant of the tag for example, mentions, labels and shortcuts
     */
    variant: TTagVariant;
    /**
     * the text rendered inside the tag, for example @username, shortcut
     */
    text: string;
    /**
     * the size of the text rendered in the tag
     * @default 100
     */
    size?: TTagSizeToken;
    /**
     * onClick handler
     */
    onClick?: () => void;
    /**
     * custom className
     */
    className?: string;
};

export type PTagRoot = Required<Pick<PTag, 'variant' | 'text' | 'size' | 'onClick'>>;

export default PTag;
