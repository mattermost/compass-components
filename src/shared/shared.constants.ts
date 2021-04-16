import { TFontColor, TFontMargin, TFontWeight } from './shared.types';

const FONT_TYPE_FAMILIES: Record<'heading' | 'body', string> = {
    body: '“Open Sans”, sans-serif',
    heading: 'Metropolis, sans-serif',
};

const FONT_WEIGHTS: TFontWeight[] = ['light', 'regular', 'bold'];

const FONT_MARGINS: TFontMargin[] = ['none', 'both', 'bottom', 'top'];

const FONT_COLORS: TFontColor[] = ['primary', 'secondary', 'disabled'];

const DEFAULT_ARGUMENTSTABLE_EXCLUSION: string[] = [
    'children',
    'className',
    'as',
    'forwardedAs',
    'ref',
    'theme',
];

const DEFAULT_PROPERTY_WHITELIST: string[] = [
    'children',
    'className',
    'disabled',
    'role',
    'selected',
    'type',
    'onClick',
];

export {
    DEFAULT_ARGUMENTSTABLE_EXCLUSION,
    DEFAULT_PROPERTY_WHITELIST,
    FONT_TYPE_FAMILIES,
    FONT_COLORS,
    FONT_MARGINS,
    FONT_WEIGHTS,
};
