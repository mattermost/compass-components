import { TBodySize, TTypeWeight, TTypeBodyElement } from '../../foundations/type';

type TTextWeight = Omit<TTypeWeight, 'light'>;

export type { TBodySize as TTextSize, TTypeBodyElement as TTextElement, TTextWeight };
