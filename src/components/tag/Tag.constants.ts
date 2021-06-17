import { TTagVariant, TTagSizeToken } from './Tag.types';

const TAG_VARIANTS: TTagVariant[] = [
    'highlight',
    'shortcut',
    'general',
    'info',
    'warning',
    'success',
];

const TAG_SIZES: TTagSizeToken[] = [25, 50, 75, 100, 200, 300];

const DEFAULT_TAG_VARIANT: TTagVariant = 'general';

const DEFAULT_TAG_SIZE: TTagSizeToken = 100;

export { TAG_VARIANTS, DEFAULT_TAG_VARIANT, TAG_SIZES, DEFAULT_TAG_SIZE };
