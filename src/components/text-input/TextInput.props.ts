import type { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';

import type { TIconGlyph } from '../../foundations/icon';
import type { TButtonWidth } from '../button';

import type { TTextInputSizeToken } from './TextInput.types';

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
     * @default theme.palette.background.default
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
    children: ReactNode | ReactNode[];
};

type PTextInputRoot = Required<
    Pick<PTextInput, 'hasError' | 'disabled' | 'active' | 'width' | 'size' | 'onClear'>
> &
    Pick<PTextInput, 'backgroundColor' | 'animatedLabel' | 'value' | 'leadingIcon'>;

type PInputRoot = Required<Pick<PTextInput, 'placeholder' | 'value' | 'onChange'>>;

export default PTextInput;
export type { PTextInputRoot, PInputRoot };
