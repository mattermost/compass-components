type TIconButtonSize = 'xsmall' | 'small-compact' | 'small' | 'standard' | 'large';

type IconButtonLayer = {
    name: 'foreground' | 'background' | 'border';
    colour:
        | '--colour-primary-rgb'
        | '--colour-secondary-rgb'
        | '--colour-focus-rgb'
        | '--colour-inverted-primary-rgb'
        | '--colour-inverted-secondary-rgb'
        | '--colour-inverted-focus-rgb'
        | '--colour-destructive-rgb';
    opacity?: number;
};

type IconButtonState = {
    selector?: 'hover' | 'active';
    layers: IconButtonLayer[];
};

export type { TIconButtonSize, IconButtonLayer, IconButtonState };
