import { TTextSizeToken } from '../text';

type TLabelTagVariant = 'general' | 'info' | 'warning' | 'success';

type TTagVariant = 'highlight' | 'shortcut' | TLabelTagVariant;

export type { TTextSizeToken as TTagSizeToken, TTagVariant };
