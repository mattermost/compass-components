import { TRadioSize, TRadioState } from './Radio.types';

const DEFAULT_RADIO_SIZE: TRadioSize = 'md';
const DEFAULT_RADIO_STATE: TRadioState = 'on';

const RADIO_STATES: TRadioState[] = ['on', 'off', 'error', 'disabled'];

const RADIO_SIZES: Record<TRadioSize, number> = {
    sm: 12,
    md: 16,
    lg: 20,
};

export { DEFAULT_RADIO_SIZE, DEFAULT_RADIO_STATE, RADIO_SIZES, RADIO_STATES };
