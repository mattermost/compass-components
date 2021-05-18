import {
    TSwitchSizeToken,
    TSwitchWidth,
    TSwitchHeight,
    TSwitchInnerWidth,
    TSwitchDimentions,
} from './Switch.types';

const DEFAULT_SWITCH_SIZE: TSwitchSizeToken = 'md';
const DEFAULT_SWITCH_HEIGHT: TSwitchHeight = 24;
const DEFAULT_SWITCH_WIDTH: TSwitchWidth = 40;
const DEFAULT_SWITCH_INNER_WIDTH: TSwitchInnerWidth = 20;
const SWITCH_SIZES: TSwitchSizeToken[] = ['sm', 'md', 'lg'];

const SWITCH_SIZE_MAPPING: Record<TSwitchSizeToken, TSwitchDimentions> = {
    sm: {
        width: 26,
        height: 16,
        innerWidth: 12,
    },
    md: {
        width: 40,
        height: 24,
        innerWidth: 20,
    },
    lg: {
        width: 52,
        height: 32,
        innerWidth: 26,
    },
};

export {
    DEFAULT_SWITCH_SIZE,
    DEFAULT_SWITCH_HEIGHT,
    DEFAULT_SWITCH_WIDTH,
    DEFAULT_SWITCH_INNER_WIDTH,
    SWITCH_SIZES,
    SWITCH_SIZE_MAPPING,
};
