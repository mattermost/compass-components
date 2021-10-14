import type { TSwitchSizeToken, TSwitchDefinition } from './Switch.types';

const DEFAULT_SWITCH_SIZE: TSwitchSizeToken = 'md';

const SWITCH_SIZES: TSwitchSizeToken[] = ['sm', 'md', 'lg'];

const SWITCH_VALUES_MAPPING: Record<TSwitchSizeToken, TSwitchDefinition> = {
    sm: {
        width: 26,
        height: 16,
        innerWidth: 12,
        labelSize: 75,
    },
    md: {
        width: 40,
        height: 24,
        innerWidth: 20,
        labelSize: 100,
    },
    lg: {
        width: 52,
        height: 32,
        innerWidth: 26,
        labelSize: 200,
    },
};

export { DEFAULT_SWITCH_SIZE, SWITCH_SIZES, SWITCH_VALUES_MAPPING };
