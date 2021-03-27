type TIconButtonSize = 'xsmall' | 'small-compact' | 'small' | 'standard' | 'large';

type IconButtonLayer = {
    type: 'foreground' | 'background' | 'border';
    colourName:
        | 'primary'
        | 'secondary'
        | 'focus'
        | 'inverted-primary'
        | 'inverted-secondary'
        | 'inverted-focus'
        | 'destructive';
    opacity?: number;
};

type IconButtonState = {
    selector: 'base' | 'hover' | 'active';
    layers: IconButtonLayer[];
};

export type { TIconButtonSize, IconButtonLayer, IconButtonState };
