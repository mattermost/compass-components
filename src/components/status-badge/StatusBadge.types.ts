import { TComponentSizeToken, TUserStatus } from '../../shared';

type TStatusBadgeSize = 8 | 10 | 12 | 16 | 20 | 32;

type TStatusBadgeSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xxl' | 'xxxl'>;

type TStatusBadgeSizeMap = {
    [key in TStatusBadgeSizeToken]: TStatusBadgeSize;
};

export type {
    TUserStatus as TStatusBadgeStatus,
    TStatusBadgeSize,
    TStatusBadgeSizeToken,
    TStatusBadgeSizeMap,
};
