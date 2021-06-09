import { TComponentSizeToken } from '../../shared';

type TIconButtonNumber = number;

type TIconButtonSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xxl' | 'xxxl'>;

export type { TIconButtonNumber, TIconButtonSizeToken };
