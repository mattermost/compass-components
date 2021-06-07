import { cyan, green, indigo, neutral, orange, purple, red, teal } from '../../foundations/colors';
import { THeadingSizeToken } from '../heading';
import { TStatusBadgeSizeToken } from '../status-badge/StatusBadge.types';
import { TShapeBorderRadius } from '../../foundations/shape';

import { TAvatarSizes, TAvatarSizeToken, TAvatarVariant } from './Avatar.types';

// by usin a tuple as type we can guarantee that indexes are aways correct when checking for them
const AVATAR_SIZES: TAvatarSizes = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

const AVATAR_SIZE_LABELS: Record<TAvatarSizeToken, string> = {
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

const DEFAULT_AVATAR_SIZE: TAvatarSizeToken = 'md';

const AVATAR_VARIANTS: TAvatarVariant[] = ['circle', 'rounded'];

const DEFAULT_AVATAR_VARIANT: TAvatarVariant = 'circle';

type TAvatarStatusDefinition = {
    size: TStatusBadgeSizeToken;
    offset: number;
};

type TAvatarSizeMap = {
    [key in TAvatarSizeToken]: {
        size: number;
        text: THeadingSizeToken;
        radius: TShapeBorderRadius;
        status: TAvatarStatusDefinition;
    };
};

const AVATAR_SIZE_MAP: TAvatarSizeMap = {
    xxxs: {
        size: 16,
        text: 25,
        radius: 4,
        status: { size: 'xs', offset: 0 },
    },
    xxs: {
        size: 20,
        text: 25,
        radius: 4,
        status: { size: 'xs', offset: -4 },
    },
    xs: {
        size: 24,
        text: 50,
        radius: 4,
        status: { size: 'sm', offset: -5 },
    },
    sm: {
        size: 32,
        text: 100,
        radius: 4,
        status: { size: 'sm', offset: -3 },
    },
    md: {
        size: 40,
        text: 300,
        radius: 8,
        status: { size: 'sm', offset: -2 },
    },
    lg: {
        size: 48,
        text: 600,
        radius: 12,
        status: { size: 'sm', offset: -1 },
    },
    xl: {
        size: 72,
        text: 900,
        radius: 16,
        status: { size: 'lg', offset: -2 },
    },
    xxl: {
        size: 96,
        text: 1000,
        radius: 20,
        status: { size: 'lg', offset: 0 },
    },
    xxxl: {
        size: 120,
        text: 1000,
        radius: 20,
        status: { size: 'xl', offset: 6 },
    },
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

export {
    AVATAR_SIZES,
    AVATAR_SIZE_LABELS,
    DEFAULT_AVATAR_SIZE,
    AVATAR_VARIANTS,
    DEFAULT_AVATAR_VARIANT,
    AVATAR_FALLBACK_COLORS,
    AVATAR_SIZE_MAP,
};
