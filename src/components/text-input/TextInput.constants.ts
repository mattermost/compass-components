import type { TIconGlyph } from '../../foundations/icon';
import type { TButtonWidth } from '../button';

import type { TTextInputSizeToken, TTextInput } from './TextInput.types';

const DEFAULT_TEXT_INPUT_SIZE: TTextInputSizeToken = 'md';

const TEXT_INPUT_SIZES: TTextInputSizeToken[] = ['sm', 'md', 'lg'];

const DEFAULT_LEADING_ICON: TIconGlyph = 'magnify';

const DEFAULT_TRAILING_ICON: TIconGlyph = 'close-circle';

const DEFAULT_TEXT_INPUT_WIDTH: TButtonWidth = 'full';

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

const LABEL_POSITIONS: Record<TTextInputSizeToken, string> = {
    sm: '-22px, -16px',
    md: '-26px, -20px',
    lg: '-32px, -22px',
};

export {
    DEFAULT_TEXT_INPUT_SIZE,
    TEXT_INPUT_SIZES,
    TEXT_INPUT_VALUES_MAPPING,
    LABEL_POSITIONS,
    DEFAULT_LEADING_ICON,
    DEFAULT_TRAILING_ICON,
    DEFAULT_TEXT_INPUT_WIDTH,
};
