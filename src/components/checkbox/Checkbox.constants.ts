import { TCheckboxSize, TCheckboxSizeToken } from './Checkbox.types';

const DEFAULT_CHECKBOX_SIZE: TCheckboxSizeToken = 'md';

const CHECKBOX_SIZES: TCheckboxSizeToken[] = ['sm', 'md', 'lg'];

const CHECKBOX_SIZE_MAPPING: Record<TCheckboxSizeToken, TCheckboxSize> = {
    sm: 12,
    md: 16,
    lg: 20,
};

export { DEFAULT_CHECKBOX_SIZE, CHECKBOX_SIZES, CHECKBOX_SIZE_MAPPING };
