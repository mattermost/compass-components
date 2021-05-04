import { TButtonIconPosition, TButtonSize, TButtonVariant, TButtonWidth } from './Button.types';

const BUTTON_SIZES: TButtonSize[] = ['small', 'medium', 'large'];

const DEFAULT_BUTTON_SIZE: TButtonSize = 'medium';

const BUTTON_VARIANTS: TButtonVariant[] = ['primary', 'secondary', 'tertiary'];

const DEFAULT_BUTTON_VARIANT: TButtonVariant = 'primary';

const BUTTON_WIDTHS: TButtonWidth[] = ['full', 'dynamic'];

const DEFAULT_BUTTON_WIDTH: TButtonWidth = 'dynamic';

const BUTTON_ICON_POSITIONS: TButtonIconPosition[] = ['start', 'end'];

const DEFAULT_BUTTON_ICON_POSITION: TButtonIconPosition = 'start';

const BUTTON_ICON_MARGIN_MAP: Record<TButtonSize, number> = {
    small: 5,
    medium: 7,
    large: 8,
};

export {
    BUTTON_SIZES,
    DEFAULT_BUTTON_SIZE,
    BUTTON_VARIANTS,
    DEFAULT_BUTTON_VARIANT,
    BUTTON_WIDTHS,
    DEFAULT_BUTTON_WIDTH,
    BUTTON_ICON_POSITIONS,
    DEFAULT_BUTTON_ICON_POSITION,
    BUTTON_ICON_MARGIN_MAP,
};
