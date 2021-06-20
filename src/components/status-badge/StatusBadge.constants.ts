import {
    TStatusBadgeSizeMap,
    TStatusBadgeSizeToken,
    TStatusBadgeStatus,
} from './StatusBadge.types';

const STATUSBADGE_SIZES: TStatusBadgeSizeToken[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const DEFAULT_STATUSBADGE_SIZE: TStatusBadgeSizeToken = 'md';

const STATUSBADGE_SIZE_MAP: TStatusBadgeSizeMap = {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 32,
};

const STATUSBADGE_STATUSES: TStatusBadgeStatus[] = ['online', 'away', 'dnd', 'offline'];

const DEFAULT_STATUSBADGE_STATUS: TStatusBadgeStatus = 'offline';

const STATUSBADGE_STATUS_LABELS: Record<TStatusBadgeStatus, string> = {
    online: 'online',
    away: 'away',
    dnd: 'do not disturb',
    offline: 'offline',
};

export {
    STATUSBADGE_SIZES,
    DEFAULT_STATUSBADGE_SIZE,
    STATUSBADGE_SIZE_MAP,
    STATUSBADGE_STATUSES,
    DEFAULT_STATUSBADGE_STATUS,
    STATUSBADGE_STATUS_LABELS,
};
