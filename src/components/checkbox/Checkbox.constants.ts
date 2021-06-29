import { TCheckboxSizeToken, TCheckboxDefinition } from './Checkbox.types';

const DEFAULT_CHECKBOX_SIZE: TCheckboxSizeToken = 'md';

const CHECKBOX_SIZES: TCheckboxSizeToken[] = ['sm', 'md', 'lg'];

const CHECKBOX_VALUES_MAPPING: Record<TCheckboxSizeToken, TCheckboxDefinition> = {
    sm: {
        checkboxSize: 12,
        iconSize: 10,
        labelSize: 75,
    },
    md: {
        checkboxSize: 16,
        iconSize: 12,
        labelSize: 100,
    },
    lg: {
        checkboxSize: 20,
        iconSize: 16,
        labelSize: 200,
    },
};

export { CHECKBOX_SIZES, DEFAULT_CHECKBOX_SIZE, CHECKBOX_VALUES_MAPPING };
