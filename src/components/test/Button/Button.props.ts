import { TButtonSize } from './Button.types';

export type PButton = {
    size: TButtonSize;
    label: string;
    variant: 'primary' | 'secondary';
};
