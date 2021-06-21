import { TIconSize } from '../../foundations/icon';

type TCheckboxSizeToken = 'sm' | 'md' | 'lg';

type TCheckboxSize = Extract<TIconSize, 12 | 16 | 20>;

export type { TCheckboxSize, TCheckboxSizeToken };
