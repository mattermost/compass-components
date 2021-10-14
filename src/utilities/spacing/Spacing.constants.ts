import type { TSpacingToken } from './Spacing.types';

const SIZES: Record<TSpacingToken, number> = {
    0: 0,
    25: 2,
    50: 4,
    75: 6,
    100: 8,
    125: 10,
    150: 12,
    175: 16,
    200: 20,
    250: 24,
    300: 28,
    350: 32,
    400: 40,
    450: 48,
    500: 56,
    600: 64,
    700: 72,
    800: 80,
};

const SPACING_TOKENS: TSpacingToken[] = [
    0, 25, 50, 75, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800,
];

export { SIZES, SPACING_TOKENS };
export default SIZES;
