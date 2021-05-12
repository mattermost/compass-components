import { TComponentSizeToken } from '../../shared/types';

export type TMentionBadgeSize = Exclude<TComponentSizeToken, 'xxs' | 'xs' | 'xl' | 'xxl'>;
