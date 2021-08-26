import { TStatusIconSizeToken, TStatusIconSizeMap, TStatusIconStatus } from './StatusIcon.types';

const STATUSICON_SIZES: TStatusIconSizeToken[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const DEFAULT_STATUSICON_SIZE: TStatusIconSizeToken = 'md';

const STATUSICON_STATUSES: TStatusIconStatus[] = ['online', 'away', 'dnd', 'offline'];

const DEFAULT_STATUSICON_STATUS: TStatusIconStatus = 'offline';

const STATUSICON_SIZE_MAP: TStatusIconSizeMap = {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 32,
};

const STATUSICON_SIZE_LABELS: Record<TStatusIconSizeToken, string> = {
    xs: 'x-small',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'x-large',
};

const STATUSICON_STATUS_LABELS: Record<TStatusIconStatus, string> = {
    online: 'online',
    away: 'away',
    dnd: 'do not disturb',
    offline: 'offline',
};

export {
    STATUSICON_SIZES,
    DEFAULT_STATUSICON_SIZE,
    STATUSICON_SIZE_MAP,
    STATUSICON_SIZE_LABELS,
    STATUSICON_STATUSES,
    DEFAULT_STATUSICON_STATUS,
    STATUSICON_STATUS_LABELS,
};
