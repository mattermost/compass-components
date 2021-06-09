import { TIconButtonSizeToken, TIconButtonNumber } from './IconButton.types';

const ICON_BUTTON_SIZES: TIconButtonSizeToken[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const ICON_BUTTON_SIZE_LABELS: { [size in TIconButtonSizeToken]: string } = {
    xs: 'x-small',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'x-large',
};

const DEFAULT_ICON_BUTTON_SIZE: TIconButtonSizeToken = 'md';

const ICON_BUTTON_DEFINITIONS: { [size in TIconButtonSizeToken]: TIconButtonNumber } = {
    xs: 200,
    sm: 200,
    md: 200,
    lg: 200,
    xl: 200,
};

export {
    ICON_BUTTON_SIZES,
    DEFAULT_ICON_BUTTON_SIZE,
    ICON_BUTTON_SIZE_LABELS,
    ICON_BUTTON_DEFINITIONS,
};
