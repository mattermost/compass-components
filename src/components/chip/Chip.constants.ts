import type { TChipSizeToken, TChipDefinition } from './Chip.types';

const CHIP_SIZES: TChipSizeToken[] = ['sm', 'md', 'lg'];

const DEFAULT_CHIP_SIZE: TChipSizeToken = 'md';

const CHIP_VALUES_MAPPING: Record<TChipSizeToken, TChipDefinition> = {
    sm: {
        iconSize: 10,
        textSize: 75,
        height: 32,
    },
    md: {
        iconSize: 12,
        textSize: 100,
        height: 40,
    },
    lg: {
        iconSize: 16,
        textSize: 200,
        height: 46,
    },
};

export { CHIP_SIZES, DEFAULT_CHIP_SIZE, CHIP_VALUES_MAPPING };
