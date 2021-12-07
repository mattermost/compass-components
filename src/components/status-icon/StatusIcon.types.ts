import type { TComponentSizeToken, TUserStatus } from '../../shared';
import type { TIconSizeToken } from '../../foundations/icon';

type TStatusIconSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xxl' | 'xxxl'>;

type TStatusIconSizeMap = {
    [key in TStatusIconSizeToken]: TIconSizeToken;
};

export type {
    TUserStatus as TStatusIconStatus,
    TIconSizeToken as TStatusIconSize,
    TStatusIconSizeToken,
    TStatusIconSizeMap,
};
