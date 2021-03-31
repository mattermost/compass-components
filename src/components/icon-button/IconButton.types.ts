import { TIconSize } from '../icon';
import { TTextSize } from '../text';

type TIconButtonSize = 'xsmall' | 'small-compact' | 'small' | 'standard' | 'large';

type TIconButtonLayer = {
    name: 'foreground' | 'background' | 'border';
    color:
        | '--color-primary-rgb'
        | '--color-primary-inverse-rgb'
        | '--color-secondary-rgb'
        | '--color-focus-rgb'
        | '--color-destructive-rgb';
    opacity?: number;
};

type TIconButtonState = {
    selector?: 'hover' | 'active';
    layers: TIconButtonLayer[];
};

type TIconButtonProperties = {
    textSize: TTextSize;
    iconSize: TIconSize;
    dimensions: number;
    padding: number;
    spacing: number;
};

export type { TIconButtonSize, TIconButtonLayer, TIconButtonState, TIconButtonProperties };
