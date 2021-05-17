import { TCheckboxSizeToken } from './Checkbox.types';

type PCheckbox = {
    /**
     * whether the checkbox is rendered with a label
     * @default 'Public'
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
    className?: string;
    onClick?: () => void;
};

export default PCheckbox;
