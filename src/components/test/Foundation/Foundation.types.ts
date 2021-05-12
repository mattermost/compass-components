// shape types
type TRadius = 4 | 8 | 12 | 16 | 20 | 24;

type TVariant = 'rectangle' | 'circle' | 'pill' | 'rounded-rectangle';

// layout types
type TSpacing = 0 | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;

type TSides = 'none' | 'all' | 'top' | 'right' | 'bottom' | 'left' | 'horizontal' | 'vertical';

// elevation types
type TElevation = 1 | 2 | 3 | 4 | 5 | 6;

type TShadow = {
    xOffset: number;
    yOffset: number;
    blur: number;
    alpha: number;
};

export type { TRadius, TVariant, TSpacing, TSides, TElevation, TShadow };
