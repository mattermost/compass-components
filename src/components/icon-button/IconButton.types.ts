type TIconButtonSize = 'xsmall' | 'small-compact' | 'small' | 'standard' | 'large';

type IconButtonLayer = {
    name: 'foreground' | 'background' | 'border';
    color:
        | '--color-primary-rgb'
        | '--color-secondary-rgb'
        | '--color-focus-rgb'
        | '--color-inverted-primary-rgb'
        | '--color-inverted-secondary-rgb'
        | '--color-inverted-focus-rgb'
        | '--color-destructive-rgb';
    opacity?: number;
};

type IconButtonState = {
    selector?: 'hover' | 'active';
    layers: IconButtonLayer[];
};

export type { TIconButtonSize, IconButtonLayer, IconButtonState };
