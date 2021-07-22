import { ChangeEventHandler, FocusEventHandler, ReactNode, ReactNodeArray } from 'react';

import { TIconGlyph } from '../../foundations/icon';
import { TButtonWidth } from '../button';

import { TTextInputSizeToken } from './TextInput.types';

type PTextInput = {
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
     * whether the text input is selected
     * @default false
     * */
    active?: boolean;
    /**
     * whether the text input is disabled for interaction
     * @default false
     * */
    disabled?: boolean;
    /**
     * whether the text input has an error
     * @default false
     * */
    hasError?: boolean;
    /**
     * whether the label should be animated
     * @default true
     * */
    animatedLabel?: boolean;
    /**
     * The label for the text input
     * */
    label?: string;
    /**
     * The placeholder text for the text input
     * */
    placeholder?: string;
    /**
     * the leading icon of the input, usually indicating search
     * */
    leadingIcon?: TIconGlyph;
    /**
     * the trailing icon of the input, usually indicating clear
     * */
    trailingIcon?: TIconGlyph;
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
    /**
     * child components
     * */
    children: ReactNode | ReactNodeArray;
};

type PTextInputRoot = Required<
    Pick<PTextInput, 'hasError' | 'disabled' | 'active' | 'width' | 'size'>
> &
    Pick<PTextInput, 'backgroundColor'>;

type PLabelRoot = Required<Pick<PTextInput, 'size' | 'value' | 'animatedLabel' | 'hasError'>> &
    Pick<PTextInput, 'backgroundColor' | 'leadingIcon' | 'children' | 'disabled'>;

type PInputRoot = Required<Pick<PTextInput, 'placeholder' | 'value' | 'onChange'>>;

export default PTextInput;
export type { PTextInputRoot, PLabelRoot, PInputRoot };
