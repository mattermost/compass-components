import { TTypeType, TTypeSize, TTypeWeight } from './Type.types';

type PType = {
    className?: string;
    variant?: String;
    size: TTypeSize;
    type: TTypeType;
    weight?: TTypeWeight;
};

type PStyledType = {
    'data-size'?: TTypeSize;
    'data-type'?: TTypeType;
    'data-weight'?: TTypeWeight;
};

export type { PType, PStyledType };
