import { TComponentSizeToken } from '../../shared/types';

export type TMentionBadgeSize = Exclude<
    TComponentSizeToken,
    'xxxs' | 'xxs' | 'xs' | 'xl' | 'xxl' | 'xxxl'
>;
