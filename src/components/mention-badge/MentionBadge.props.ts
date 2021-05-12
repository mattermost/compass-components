import { TMentionBadgeSize } from './MentionBadge.types';

type PMentionBadge = {
    inverted?: boolean;
    background?: string;
    mentionCount?: number;
    mentionLimit?: number;
    size?: TMentionBadgeSize;
};

export default PMentionBadge;
