import type { TComponentSizeToken } from '../../shared';

export type TMentionBadgeSizeToken = Exclude<
    TComponentSizeToken,
    'xxxs' | 'xxs' | 'xs' | 'xl' | 'xxl' | 'xxxl'
>;
