import { TIconSize } from '../icon';

type TTextInputSizeToken = 'sm' | 'md' | 'lg';

type TTextInputSize = Extract<TIconSize, 12 | 16 | 20>;

export type { TTextInputSizeToken, TTextInputSize };
