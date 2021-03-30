import { TCheckboxSizes, TCheckboxState } from './Checkbox.types';

const DEFAULT_CHECKBOX_SIZE: TCheckboxSizes = 'md';
const DEFAULT_CHECKBOX_STATE: TCheckboxState = 'on';

const CHECKBOX_STATES: TCheckboxState[] = ['on', 'off', 'status', 'disabled'];

const CHECKBOX_SIZES: Record<TCheckboxSizes, number> = {
    sm: 12,
    md: 16,
    lg: 20,
};

export { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_STATE, CHECKBOX_SIZES, CHECKBOX_STATES };
