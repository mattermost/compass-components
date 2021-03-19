import { TTypeSize, TTypeType, TTypeWeight } from './Type.types';

const TYPE_SIZES: TTypeSize[] = [25, 50, 75, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const TYPE_WEIGHTS: TTypeWeight[] = ['light', 'regular', 'bold'];

const DEFAULT_TYPE_SIZE: TTypeSize = 100;

const DEFAULT_TYPE_TYPE: TTypeType = 'body';

const DEFAULT_FONT_SIZE = 14;

const DEFAULT_LINE_HEIGHT = 20;

const BODY_FONT_SIZES: Record<TTypeSize, number> = {
    25: 10,
    50: 11,
    75: 12,
    100: 14,
    200: 16,
    300: 18,
    400: 18,
    500: 18,
    600: 18,
    700: 18,
    900: 18,
    800: 18,
    1000: 18,
};

const HEADING_FONT_SIZES: Record<TTypeSize, number> = {
    25: 10,
    50: 11,
    75: 12,
    100: 14,
    200: 16,
    300: 18,
    400: 20,
    500: 22,
    600: 25,
    700: 28,
    800: 32,
    900: 36,
    1000: 40,
};

const BODY_LINE_HEIGHTS: Record<TTypeSize, number> = {
    25: 16,
    50: 16,
    75: 16,
    100: 20,
    200: 24,
    300: 28,
    400: 28,
    500: 28,
    600: 28,
    700: 28,
    800: 28,
    900: 28,
    1000: 28,
};

const HEADING_LINE_HEIGHTS: Record<TTypeSize, number> = {
    25: 16,
    50: 16,
    75: 16,
    100: 20,
    200: 24,
    300: 24,
    400: 28,
    500: 28,
    600: 30,
    700: 36,
    800: 40,
    900: 44,
    1000: 48,
};

export {
    TYPE_SIZES,
    TYPE_WEIGHTS,
    DEFAULT_TYPE_SIZE,
    DEFAULT_TYPE_TYPE,
    DEFAULT_FONT_SIZE,
    DEFAULT_LINE_HEIGHT,
    BODY_FONT_SIZES,
    BODY_LINE_HEIGHTS,
    HEADING_FONT_SIZES,
    HEADING_LINE_HEIGHTS,
};
