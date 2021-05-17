import { TRadioSizeToken } from './Radio.types';

export type PRadio = {
    /**
     * whether the radio button is rendered with a label
     * @default 'Public'
     * */
    label?: string;
    /**
     * whether the radio button has an error
     * @default false
     * */
    hasError?: boolean;
    /**
     * the size of the radio button
     * @default 16
     * */
    size?: TRadioSizeToken;
    className?: string;
    /**
     * whether the radio button is disabled for interaction
     * @default false
     * */
    disabled?: boolean;
    checked?: boolean;
    onClick?: () => void;
};
