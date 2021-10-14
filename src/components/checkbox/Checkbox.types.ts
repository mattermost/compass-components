import type { TIconSize } from '../../foundations/icon';
import type { TTextSizeToken } from '../text';

type TCheckboxSizeToken = 'sm' | 'md' | 'lg';

type TCheckboxSize = Extract<TIconSize, 12 | 16 | 20>;

type TCheckboxDefinition = {
    checkboxSize: TCheckboxSize;
    iconSize: TIconSize;
    labelSize: TTextSizeToken;
};

export type { TCheckboxSizeToken, TCheckboxDefinition };
