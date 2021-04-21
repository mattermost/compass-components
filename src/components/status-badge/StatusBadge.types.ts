import { TComponentSizeToken } from '../../shared/shared.types';

type TStatusBadgeStatus = 'online' | 'away' | 'dnd' | 'offline';

type TStatusBadgeSize = 10 | 12 | 16 | 20 | 32;

type TStatusBadgeSizeMap = {
    [key in TComponentSizeToken]: TStatusBadgeSize;
};

export type { TStatusBadgeStatus, TStatusBadgeSize, TStatusBadgeSizeMap };
