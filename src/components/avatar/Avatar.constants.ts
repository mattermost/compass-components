import { cyan, green, indigo, neutral, orange, purple, red, teal } from '../../foundations/colors';

import { TAvatarSizeToken } from './Avatar.types';

const AVATAR_SIZES: TAvatarSizeToken[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const DEFAULT_AVATAR_SIZE: TAvatarSizeToken = 'md';

const AVATAR_SIZE_MAP: Record<TAvatarSizeToken, number> = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 72,
    xxl: 96,
};

const AVATAR_FALLBACK_COLORS: string[] = [
    orange[400],
    green[700],
    teal[600],
    cyan[400],
    indigo[400],
    neutral[900],
    purple[400],
    red[300],
];

export { AVATAR_SIZES, DEFAULT_AVATAR_SIZE, AVATAR_SIZE_MAP, AVATAR_FALLBACK_COLORS };
