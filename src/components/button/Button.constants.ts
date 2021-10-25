import type {
    TButtonDefinition,
    TButtonIconPosition,
    TButtonSizeToken,
    TButtonVariant,
    TButtonWidth,
} from './Button.types';

const BUTTON_SIZES: TButtonSizeToken[] = ['xs', 'sm', 'md', 'lg'];

const DEFAULT_BUTTON_SIZE: TButtonSizeToken = 'md';

const BUTTON_VARIANTS: TButtonVariant[] = ['primary', 'secondary', 'tertiary'];

const DEFAULT_BUTTON_VARIANT: TButtonVariant = 'primary';

const BUTTON_WIDTHS: TButtonWidth[] = ['full', 'auto'];

const DEFAULT_BUTTON_WIDTH: TButtonWidth = 'auto';

const BUTTON_ICON_POSITIONS: TButtonIconPosition[] = ['start', 'end'];

const DEFAULT_BUTTON_ICON_POSITION: TButtonIconPosition = 'start';

const BUTTON_SIZE_MAP: Record<TButtonSizeToken, TButtonDefinition> = {
    xs: {
        spacing: {
            vertical: 0,
            horizontal: 125,
        },
        labelSize: 50,
        iconSize: 12,
        iconMargin: 5,
        height: 24,
    },
    sm: {
        spacing: {
            vertical: 0,
            horizontal: 175,
        },
        labelSize: 75,
        iconSize: 12,
        iconMargin: 5,
        height: 32,
    },
    md: {
        spacing: {
            vertical: 0,
            horizontal: 200,
        },
        labelSize: 100,
        iconSize: 16,
        iconMargin: 7,
        height: 40,
    },
    lg: {
        spacing: {
            vertical: 0,
            horizontal: 250,
        },
        labelSize: 100,
        iconSize: 20,
        iconMargin: 8,
        height: 48,
    },
};

export {
    BUTTON_SIZES,
    BUTTON_SIZE_MAP,
    DEFAULT_BUTTON_SIZE,
    BUTTON_VARIANTS,
    DEFAULT_BUTTON_VARIANT,
    BUTTON_WIDTHS,
    DEFAULT_BUTTON_WIDTH,
    BUTTON_ICON_POSITIONS,
    DEFAULT_BUTTON_ICON_POSITION,
};
