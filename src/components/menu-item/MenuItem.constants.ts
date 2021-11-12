import type { TMenuItemSizeToken, TMenuItemNumber } from './MenuItem.types';

const MENU_ITEM_SIZES: TMenuItemSizeToken[] = [
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

const MENU_ITEM_SIZE_LABELS: { [size in TMenuItemSizeToken]: string } = {
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

const DEFAULT_MENU_ITEM_SIZE: TMenuItemSizeToken = 'md';

const MENU_ITEM_DEFINITIONS: { [size in TMenuItemSizeToken]: TMenuItemNumber } = {
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

export { MENU_ITEM_SIZES, DEFAULT_MENU_ITEM_SIZE, MENU_ITEM_SIZE_LABELS, MENU_ITEM_DEFINITIONS };
