import { TRadioSize, TRadioSizeToken } from './Radio.types';

const DEFAULT_RADIO_SIZE: TRadioSizeToken = 'md';

const RADIO_SIZES: TRadioSizeToken[] = ['sm', 'md', 'lg'];

const RADIO_SIZE_MAPPING: Record<TRadioSizeToken, TRadioSize> = {
    sm: 12,
    md: 16,
    lg: 20,
};

export { DEFAULT_RADIO_SIZE, RADIO_SIZES, RADIO_SIZE_MAPPING };
