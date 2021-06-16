import { TTextSizeToken } from '../text/Text.types';

type TLabelTagVariant = 'general' | 'info' | 'warning' | 'success';

type TTagVariant = 'highlight' | 'shortcut' | TLabelTagVariant;

export { TTextSizeToken as TTagSizeToken, TTagVariant };
