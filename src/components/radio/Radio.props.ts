import { TRadioSize, TRadioState } from './Radio.types';

export type PRadio = {
    labelText?: string;
    state?: TRadioState;
    size?: TRadioSize;
    className?: string;
    borderColor?: string;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
