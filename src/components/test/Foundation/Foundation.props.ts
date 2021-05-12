import { TRadius, TVariant, TSpacing, TSides, TElevation } from './Foundation.types';

type PShape = {
    height?: string;
    radius?: TRadius;
    variant: TVariant;
    width?: string;
};

type PLayout = {
    spacing?: TSpacing;
    sides?: TSides;
};

type PElevation = {
    elevation?: TElevation;
};

export type { PShape, PLayout, PElevation };
