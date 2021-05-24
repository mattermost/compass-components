import { TIconGlyph } from '../icon';
import { TButtonWidth } from '../button';

import { TTextInputSizeToken } from './TextInput.types';

export type PTextInput = {
    /**
     * The label for the text input
     * */
    label?: string;
    /**
     * The placeholder text for the text input
     * */
    placeholder?: string;
    /**
     * whether the text input has an error
     * @default false
     * */
    hasError?: boolean;
    /**
     * the size of the text input
     * @default 'md'
     * */
    size?: TTextInputSizeToken;
    /**
     * the width of the text input
     * @default '100%'
     * */
    width?: TButtonWidth;
    /**
     * the leading icon of the input, usually indicating search
     * @default 'magnify'
     * */
    leadingIcon?: TIconGlyph;
    /**
     * the trailing icon of the input, usually indicating clear
     * @default 'close-circle'
     * */
    trailingIcon?: TIconGlyph;
    /**
     * whether the text input is disabled for interaction
     * @default false
     * */
    disabled?: boolean;
    /**
     * whether the text input is selected
     * @default false
     * */
    active?: boolean;
    className?: string;
};
