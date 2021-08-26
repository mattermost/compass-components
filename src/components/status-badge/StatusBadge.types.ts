import { TComponentSizeToken, TUserStatus } from '../../shared';

type TStatusBadgeSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xxl' | 'xxxl'>;

export type { TUserStatus as TStatusBadgeStatus, TStatusBadgeSizeToken };
