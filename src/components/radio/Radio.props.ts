import type { ReactNode, MouseEventHandler } from 'react';

import type { TRadioSizeToken } from './Radio.types';

type PRadio = {
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
    onClick?: MouseEventHandler<HTMLLabelElement>;
    /**
     * onChange event handler
     * */
    onChange?: () => void;
    /**
     * custom classname
     * */
    className?: string;
    /**
     * child nodes
     * */
    children: ReactNode | ReactNode[];
};

type PRadioRoot = Required<Pick<PRadio, 'hasError' | 'disabled' | 'size' | 'checked' | 'children'>>;

type PRadioLabel = Required<Pick<PRadio, 'size'>>;

export default PRadio;

export type { PRadioRoot, PRadioLabel };
