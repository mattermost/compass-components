import { cyan, green, indigo, neutral, orange, purple, red, teal } from '../../foundations/colors';
import { THeadingSizeToken } from '../heading';
import { TStatusBadgeSizeToken } from '../status-badge/StatusBadge.types';
import { TShapeBorderRadius } from '../../foundations/shape';

import { TAvatarSizeToken } from './Avatar.types';

const AVATAR_SIZES: TAvatarSizeToken[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const DEFAULT_AVATAR_SIZE: TAvatarSizeToken = 'md';

const AVATAR_SIZE_MAP: Record<TAvatarSizeToken, number> = {
    xxxs: 16,
    xxs: 20,
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 72,
    xxl: 96,
    xxxl: 120,
};

const AVATAR_TEXT_SIZE_MAP: Record<TAvatarSizeToken, THeadingSizeToken> = {
    xxxs: 25,
    xxs: 25,
    xs: 50,
    sm: 100,
    md: 300,
    lg: 600,
    xl: 900,
    xxl: 1000,
    xxxl: 1000,
};

const AVATAR_STATUS_SIZE_MAP: Record<TAvatarSizeToken, TStatusBadgeSizeToken> = {
    xxxs: 'xxs',
    xxs: 'xxs',
    xs: 'xxs',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg',
    xxl: 'xl',
    xxxl: 'xl',
};

const AVATAR_CORNER_RADIUS_SIZE_MAP: Record<TAvatarSizeToken, TShapeBorderRadius> = {
    xxxs: 4,
    xxs: 4,
    xs: 4,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 20,
    xxxl: 20,
};

const AVATAR_MENTIONBADGE_SIZE_MAP: Record<TAvatarSizeToken, number> = {
    xxxs: 8,
    xxs: 8,
    xs: 8,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 24,
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
    DEFAULT_AVATAR_SIZE,
    AVATAR_FALLBACK_COLORS,
    AVATAR_SIZE_MAP,
    AVATAR_TEXT_SIZE_MAP,
    AVATAR_STATUS_SIZE_MAP,
    AVATAR_CORNER_RADIUS_SIZE_MAP,
    AVATAR_MENTIONBADGE_SIZE_MAP,
};
