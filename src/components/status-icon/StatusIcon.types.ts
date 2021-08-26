import { TComponentSizeToken, TUserStatus } from '../../shared';
import { TIconSize } from '../../foundations/icon';

type TStatusIconSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xxl' | 'xxxl'>;

type TStatusIconSizeMap = {
    [key in TStatusIconSizeToken]: TIconSize;
};

export type {
    TUserStatus as TStatusIconStatus,
    TIconSize as TStatusIconSize,
    TStatusIconSizeToken,
    TStatusIconSizeMap,
};
