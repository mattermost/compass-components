import { TRadioSizeToken, TRadioDefinition } from './Radio.types';

const DEFAULT_RADIO_SIZE: TRadioSizeToken = 'md';

const RADIO_SIZES: TRadioSizeToken[] = ['sm', 'md', 'lg'];

const RADIO_VALUES_MAPPING: Record<TRadioSizeToken, TRadioDefinition> = {
    sm: {
        radioSize: 12,
        labelSize: 75,
    },
    md: {
        radioSize: 16,
        labelSize: 100,
    },
    lg: {
        radioSize: 20,
        labelSize: 200,
    },
};

export { RADIO_SIZES, DEFAULT_RADIO_SIZE, RADIO_VALUES_MAPPING };
