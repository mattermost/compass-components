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
     * @default '100%'
     * */
    width?: TButtonWidth;
    /**
     * custom background color
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
    onChange?: (event: React.MouseEvent) => void;
    /**
     * onClear handler
     * */
    onClear?: () => void;
    /**
     * onFocus handler
     * */
    onFocus?: (event: React.MouseEvent) => void;
    /**
     * onBlur handler
     * */
    onBlur?: (event: React.MouseEvent) => void;
    /**
     * custom classname
     * */
    className?: string;
};

type PTextInputRoot = Required<
    Pick<PTextInput, 'hasError' | 'disabled' | 'active' | 'width' | 'size' | 'backgroundColor'>
>;

type PLabelRoot = Required<
    Pick<
        PTextInput,
        'active' | 'size' | 'value' | 'backgroundColor' | 'animatedLabel' | 'leadingIcon'
    >
>;

type PInputRoot = Required<Pick<PTextInput, 'placeholder' | 'value' | 'onChange'>>;

export default PTextInput;
export type { PTextInputRoot, PLabelRoot, PInputRoot };
