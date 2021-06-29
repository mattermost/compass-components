import { ChangeEventHandler, FocusEventHandler, ReactNode, ReactNodeArray } from 'react';

import { TIconGlyph } from '../../foundations/icon';
import { TButtonWidth } from '../button';

import { TTextInputSizeToken } from './TextInput.types';

type PTextInput = {
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
     * @default 'full'
     * */
    width?: TButtonWidth;
    /**
     * custom background color
     * @default theme.background.default
     * */
    backgroundColor?: string;
    /**
     * the leading icon of the input, usually indicating search
     * */
    leadingIcon?: TIconGlyph;
    /**
     * the trailing icon of the input, usually indicating clear
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
    /**
     * whether the label should be animated
     * @default true
     * */
    animatedLabel?: boolean;
    /**
     * custom value
     * */
    value?: string;
    /**
     * onChange handler
     * */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * onClear handler
     * */
    onClear?: () => void;
    /**
     * onFocus handler
     * */
    onFocus?: FocusEventHandler<HTMLDivElement>;
    /**
     * onBlur handler
     * */
    onBlur?: FocusEventHandler<HTMLDivElement>;
    /**
     * custom classname
     * */
    className?: string;
    children: ReactNode | ReactNodeArray;
};

type PTextInputRoot = Required<
    Pick<PTextInput, 'hasError' | 'disabled' | 'active' | 'width' | 'size'>
> &
    Pick<PTextInput, 'backgroundColor'>;

type PLabelRoot = Required<Pick<PTextInput, 'active' | 'size' | 'value' | 'animatedLabel'>> &
    Pick<PTextInput, 'backgroundColor' | 'leadingIcon' | 'children'>;

type PInputRoot = Required<Pick<PTextInput, 'placeholder' | 'value' | 'onChange'>>;

export default PTextInput;
export type { PTextInputRoot, PLabelRoot, PInputRoot };
