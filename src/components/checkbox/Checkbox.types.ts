import type { TIconSizeToken } from '../../foundations/icon';
import type { TTextSizeToken } from '../text';

type TCheckboxSizeToken = 'sm' | 'md' | 'lg';

type TCheckboxSize = Extract<TIconSizeToken, 12 | 16 | 20>;

type TCheckboxDefinition = {
    checkboxSize: TCheckboxSize;
    iconSize: TIconSizeToken;
    labelSize: TTextSizeToken;
};

export type { TCheckboxSizeToken, TCheckboxDefinition };
