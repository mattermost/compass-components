import { TComponentSizeToken } from '../../shared/types';

type TStatusBadgeStatus = 'online' | 'away' | 'dnd' | 'offline';

type TStatusBadgeSize = 8 | 10 | 12 | 16 | 20 | 32;

type TStatusBadgeSizeToken = Exclude<TComponentSizeToken, 'xxl'>;

type TStatusBadgeSizeMap = {
    [key in TStatusBadgeSizeToken]: TStatusBadgeSize;
};

export type { TStatusBadgeStatus, TStatusBadgeSize, TStatusBadgeSizeToken, TStatusBadgeSizeMap };
