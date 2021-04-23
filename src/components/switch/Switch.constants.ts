import {
    TSwitchSize,
    TSwitchState,
    TSwitchWidths,
    TSwitchHeights,
    TSwitchInnerWidths,
} from './Switch.types';

const DEFAULT_SWITCH_SIZE: TSwitchSize = 'md';
const DEFAULT_SWITCH_STATE: TSwitchState = 'on';
const DEFAULT_SWITCH_HEIGHT: TSwitchHeights = 24;
const DEFAULT_SWITCH_WIDTH: TSwitchWidths = 40;
const DEFAULT_SWITCH_INNER_WIDTH: TSwitchInnerWidths = 20;
const SWITCH_STATES: TSwitchState[] = ['on', 'off', 'disabled'];

export {
    DEFAULT_SWITCH_SIZE,
    DEFAULT_SWITCH_STATE,
    DEFAULT_SWITCH_HEIGHT,
    DEFAULT_SWITCH_WIDTH,
    DEFAULT_SWITCH_INNER_WIDTH,
    SWITCH_STATES,
};
