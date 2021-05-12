import { TSpacingToken } from '../../foundations/layout';
import { TTextSizeToken } from '../text';

import { TMentionBadgeSize } from './MentionBadge.types';

const MENTIONBADGE_SIZES: TMentionBadgeSize[] = ['sm', 'md', 'lg'];

const DEFAULT_MENTIONBADGE_SIZE: TMentionBadgeSize = 'md';

const MENTIONBADGE_HEIGHT_SIZE_MAP: Record<TMentionBadgeSize, number> = {
    sm: 16,
    md: 20,
    lg: 22,
};

const MENTIONBADGE_TEXT_SIZE_MAP: Record<TMentionBadgeSize, TTextSizeToken> = {
    sm: 25,
    md: 50,
    lg: 100,
};

const MENTIONBADGE_PADDING_SIZE_MAP: Record<TMentionBadgeSize, TSpacingToken[]> = {
    sm: [25, 25, 25],
    md: [50, 50, 50],
    lg: [75, 50, 25],
};

export {
    MENTIONBADGE_SIZES,
    DEFAULT_MENTIONBADGE_SIZE,
    MENTIONBADGE_HEIGHT_SIZE_MAP,
    MENTIONBADGE_TEXT_SIZE_MAP,
    MENTIONBADGE_PADDING_SIZE_MAP,
};
