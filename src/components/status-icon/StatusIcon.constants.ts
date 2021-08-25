import { TStatusIconSize, TStatusIconStatus } from './StatusIcon.types';

const STATUSICON_SIZES: TStatusIconSize[] = [8, 10, 12, 16, 20, 32];

const DEFAULT_STATUSICON_SIZE: TStatusIconSize = 16;

const STATUSICON_STATUSES: TStatusIconStatus[] = ['online', 'away', 'dnd', 'offline'];

const DEFAULT_STATUSICON_STATUS: TStatusIconStatus = 'offline';

const STATUSICON_STATUS_LABELS: Record<TStatusIconStatus, string> = {
    online: 'online',
    away: 'away',
    dnd: 'do not disturb',
    offline: 'offline',
};

export {
    STATUSICON_SIZES,
    DEFAULT_STATUSICON_SIZE,
    STATUSICON_STATUSES,
    DEFAULT_STATUSICON_STATUS,
    STATUSICON_STATUS_LABELS,
};
