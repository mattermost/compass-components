import type { MouseEventHandler } from 'react';

import type { TCheckboxSizeToken } from './Checkbox.types';

type PCheckbox = {
    /**
     * whether the checkbox is rendered with a label
     * */
    label?: string;
    /**
     * the size of the checkbox
     * @default 16
     * */
    size?: TCheckboxSizeToken;
    /**
     * whether the checkbox has an error
     * @default false
     * */
    hasError?: boolean;
    /**
     * whether the checkbox is checked
     * @default false
     * */
    checked?: boolean;
    /**
     * whether the checkbox is disabled for interaction
     * @default false
     * */
    disabled?: boolean;
    /**
     * onClick event handler
     * */
    onClick?: MouseEventHandler<HTMLLabelElement>;
    /**
     * onChange event handler
     * */
    onChange?: () => void;
    /**
     * custom classname
     * */
    className?: string;
};

export type PCheckboxRoot = Required<Pick<PCheckbox, 'hasError' | 'disabled' | 'size' | 'checked'>>;

export default PCheckbox;
