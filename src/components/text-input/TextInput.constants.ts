import { TIconGlyph } from '../icon';

import { TTextInputSize, TTextInputSizeToken } from './TextInput.types';

const DEFAULT_TEXT_INPUT_SIZE: TTextInputSizeToken = 'md';

const TEXT_INPUT_SIZES: TTextInputSizeToken[] = ['sm', 'md', 'lg'];

const DEFAULT_LEADING_ICON: TIconGlyph = 'magnify';

const DEFAULT_TRAILING_ICON: TIconGlyph = 'close-circle';

const TEXT_INPUT_SIZE_MAPPING: Record<TTextInputSizeToken, TTextInputSize> = {
    sm: 12,
    md: 16,
    lg: 20,
};

export {
    DEFAULT_TEXT_INPUT_SIZE,
    TEXT_INPUT_SIZES,
    TEXT_INPUT_SIZE_MAPPING,
    DEFAULT_LEADING_ICON,
    DEFAULT_TRAILING_ICON,
};
