import { TBodySize, TTypeWeight, TTypeBodyVariant } from '../../foundations/type';

type TTextWeight = Omit<TTypeWeight, 'light'>;

export type { TBodySize as TTextSize, TTypeBodyVariant as TTextVariant, TTextWeight };
