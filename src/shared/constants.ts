import { TComponentSizes, TFontColor, TFontMargin, TFontWeight } from './types';

const FONT_TYPE_FAMILIES: Record<'heading' | 'body', string> = {
    body: 'Open Sans, sans-serif',
    heading: 'Metropolis, sans-serif',
};

const FONT_WEIGHTS: TFontWeight[] = ['light', 'regular', 'bold'];

const FONT_WEIGHT_MAP: Record<TFontWeight, number> = {
    light: 300,
    regular: 400,
    bold: 600,
};

const FONT_MARGINS: TFontMargin[] = ['none', 'both', 'bottom', 'top'];

const FONT_COLORS: TFontColor[] = ['primary', 'secondary', 'disabled', 'inherit'];

const DEFAULT_ARGUMENTS_TABLE_EXCLUSION: string[] = ['children'];

const DEFAULT_PROPERTY_WHITELIST: string[] = [
    'children',
    'className',
    'disabled',
    'role',
    'selected',
    'type',
    'onClick',
    'checked',
    'defaultChecked',
];

const COMPONENT_SIZES: TComponentSizes = [
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

export {
    COMPONENT_SIZES,
    DEFAULT_ARGUMENTS_TABLE_EXCLUSION,
    DEFAULT_PROPERTY_WHITELIST,
    FONT_TYPE_FAMILIES,
    FONT_COLORS,
    FONT_MARGINS,
    FONT_WEIGHTS,
    FONT_WEIGHT_MAP,
};
