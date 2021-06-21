import { TIconSize } from '../../foundations/icon';

type TRadioSizeToken = 'sm' | 'md' | 'lg';

type TRadioSize = Extract<TIconSize, 12 | 16 | 20>;

export type { TRadioSizeToken, TRadioSize };
