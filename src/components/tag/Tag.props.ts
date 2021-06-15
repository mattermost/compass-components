import { TTextSizeToken } from '../text/Text.types';

import { TTagType } from './Tag.types';

type PTag = {
    type: TTagType;
    text: string;
    size?: TTextSizeToken;
    onClick?: () => void;
    className?: string;
};

export default PTag;
