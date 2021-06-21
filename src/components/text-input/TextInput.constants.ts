import { TIconGlyph } from '../../foundations/icon';

import { TTextInputSizeToken, TTextInput } from './TextInput.types';

const DEFAULT_TEXT_INPUT_SIZE: TTextInputSizeToken = 'md';

const TEXT_INPUT_SIZES: TTextInputSizeToken[] = ['sm', 'md', 'lg'];

const DEFAULT_LEADING_ICON: TIconGlyph = 'magnify';

const DEFAULT_TRAILING_ICON: TIconGlyph = 'close-circle';

const TEXT_INPUT_VALUES_MAPPING: { [size in TTextInputSizeToken]: TTextInput } = {
    sm: {
        spacing: 125,
        iconSize: 12,
        height: 32,
        labelSize: 75,
        labelMargin: 150,
    },
    md: {
        spacing: 150,
        iconSize: 16,
        height: 40,
        labelSize: 100,
        labelMargin: 175,
    },
    lg: {
        spacing: 150,
        iconSize: 16,
        height: 48,
        labelSize: 200,
        labelMargin: 200,
    },
};

export {
    DEFAULT_TEXT_INPUT_SIZE,
    TEXT_INPUT_SIZES,
    TEXT_INPUT_VALUES_MAPPING,
    DEFAULT_LEADING_ICON,
    DEFAULT_TRAILING_ICON,
};
