import { TRadioSizeToken } from './Radio.types';

export type PRadio = {
    /**
     * whether the radio button is rendered with a label
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
    /**
     * whether the radio button is checked
     * @default false
     * */
    checked?: boolean;
    /**
     * whether the radio button is disabled for interaction
     * @default false
     * */
    disabled?: boolean;
    /**
     * onClick event handler
     * */
    onClick?: () => void;
    /**
     * custom classname
     * */
    className?: string;
};
