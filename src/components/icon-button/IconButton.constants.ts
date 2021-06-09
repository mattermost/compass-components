import { TIconButtonSizeToken, TIconButtonNumber } from './IconButton.types';

const ICON_BUTTON_SIZES: TIconButtonSizeToken[] = [
    'xxxs',
    'xxs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
];

const ICON_BUTTON_SIZE_LABELS: { [size in TIconButtonSizeToken]: string } = {
    xxxs: 'xxx-small',
    xxs: 'xx-small',
    xs: 'x-small',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'x-large',
    xxl: 'xx-large',
    xxxl: 'xxx-large',
};

const DEFAULT_ICON_BUTTON_SIZE: TIconButtonSizeToken = 'md';

const ICON_BUTTON_DEFINITIONS: { [size in TIconButtonSizeToken]: TIconButtonNumber } = {
    xxxs: 200,
    xxs: 200,
    xs: 200,
    sm: 200,
    md: 200,
    lg: 200,
    xl: 200,
    xxl: 200,
    xxxl: 200,
};

export {
    ICON_BUTTON_SIZES,
    DEFAULT_ICON_BUTTON_SIZE,
    ICON_BUTTON_SIZE_LABELS,
    ICON_BUTTON_DEFINITIONS,
};
