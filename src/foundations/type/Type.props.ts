import { TTypeType, TTypeSize, TTypeWeight } from './Type.types';

export type PType = {
    className?: string;
    size: TTypeSize;
    type: TTypeType;
    variant?: String;
    weight?: TTypeWeight;
};
