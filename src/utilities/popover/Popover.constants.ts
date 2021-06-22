import { TPopoverSizeToken, TPopoverNumber } from './Popover.types';

const POPOVER_SIZES: TPopoverSizeToken[] = [
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

const POPOVER_SIZE_LABELS: { [size in TPopoverSizeToken]: string } = {
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

const DEFAULT_POPOVER_SIZE: TPopoverSizeToken = 'md';

const POPOVER_DEFINITIONS: { [size in TPopoverSizeToken]: TPopoverNumber } = {
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

export { POPOVER_SIZES, DEFAULT_POPOVER_SIZE, POPOVER_SIZE_LABELS, POPOVER_DEFINITIONS };
