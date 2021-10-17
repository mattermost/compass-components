import type { TSpacingToken } from '../../utilities/spacing';
import type { TTextSizeToken } from '../text';

import type { TMentionBadgeSizeToken } from './MentionBadge.types';

const MENTIONBADGE_SIZES: TMentionBadgeSizeToken[] = ['sm', 'md', 'lg'];

const DEFAULT_MENTIONBADGE_SIZE: TMentionBadgeSizeToken = 'lg';

const MENTIONBADGE_HEIGHT_SIZE_MAP: Record<TMentionBadgeSizeToken, number> = {
    sm: 16,
    md: 20,
    lg: 22,
};

const MENTIONBADGE_TEXT_SIZE_MAP: Record<TMentionBadgeSizeToken, TTextSizeToken> = {
    sm: 25,
    md: 50,
    lg: 100,
};

const MENTIONBADGE_PADDING_SIZE_MAP: Record<TMentionBadgeSizeToken, TSpacingToken[]> = {
    sm: [50, 50, 50],
    md: [75, 75, 50],
    lg: [100, 75, 50],
};

const DEFAULT_MENTIONBAGDE_MENTIONS = 1;
const DEFAULT_MENTIONBAGDE_MENTION_LIMIT = 99;

export {
    MENTIONBADGE_SIZES,
    DEFAULT_MENTIONBADGE_SIZE,
    MENTIONBADGE_HEIGHT_SIZE_MAP,
    MENTIONBADGE_TEXT_SIZE_MAP,
    MENTIONBADGE_PADDING_SIZE_MAP,
    DEFAULT_MENTIONBAGDE_MENTIONS,
    DEFAULT_MENTIONBAGDE_MENTION_LIMIT,
};
