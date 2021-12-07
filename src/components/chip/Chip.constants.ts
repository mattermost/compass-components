import type { TChipSizeToken, TChipDefinitionMap } from './Chip.types';

const CHIP_SIZES: TChipSizeToken[] = ['sm', 'md', 'lg'];

const CHIP_SIZE_LABELS: { [size in TChipSizeToken]: string } = {
    sm: 'small',
    md: 'medium',
    lg: 'large',
};

const DEFAULT_CHIP_SIZE: TChipSizeToken = 'md';

const CHIP_DEFINITIONS: TChipDefinitionMap = {
    sm: { padding: 50, textSize: 50, iconBgSize: 12, iconSize: 10, avatarSize: 'xxxs' },
    md: { padding: 50, textSize: 75, iconBgSize: 16, iconSize: 12, avatarSize: 'xxs' },
    lg: { padding: 75, textSize: 100, iconBgSize: 20, iconSize: 16, avatarSize: 'xxs' },
};

export { CHIP_SIZES, DEFAULT_CHIP_SIZE, CHIP_SIZE_LABELS, CHIP_DEFINITIONS };
