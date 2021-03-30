import { TCheckboxSizes, TCheckboxState } from './Checkbox.types';

type PCheckbox = {
    labelText: string;
    state: TCheckboxState;
    size: TCheckboxSizes;
    hideLabel: boolean;
};

export default PCheckbox;
