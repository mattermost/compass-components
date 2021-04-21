import { TComponentSizeToken } from '../../shared/shared.types';

import { TStatusBadgeSizeMap, TStatusBadgeStatus } from './StatusBadge.types';

const STATUSBADGE_SIZES: TComponentSizeToken[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const DEFAULT_STATUSBADGE_SIZE: TComponentSizeToken = 'md';

const STATUSBADGE_SIZE_MAP: TStatusBadgeSizeMap = {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 32,
};

const STATUSBADGE_STATUSES: TStatusBadgeStatus[] = ['online', 'away', 'dnd', 'offline'];

export { STATUSBADGE_SIZES, DEFAULT_STATUSBADGE_SIZE, STATUSBADGE_SIZE_MAP, STATUSBADGE_STATUSES };
