import { TTypographyHeadingVariant, TTypographySizes } from './Typography.types';

const HEADING_VARIANTS: TTypographyHeadingVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle'];

const FONT_SIZE_MAPPING: Record<string, TTypographySizes> = {
    h1: 700,
    h2: 600,
    h3: 500,
    h4: 500,
    h5: 500,
    h6: 400,
    subtitle: 300,
    body: 300,
};

export { HEADING_VARIANTS, FONT_SIZE_MAPPING };
