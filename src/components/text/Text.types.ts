import { TTypeSize, TTypeWeight } from '../../foundations/type';

type TTextSize = Omit<TTypeSize, '400' | '500' | '600' | '700' | '800' | '900' | '1000'>;

type TTextVariant = 'p' | 'span';

type TTextWeight = Omit<TTypeWeight, 'light'>;

export type { TTextSize, TTextVariant, TTextWeight };
