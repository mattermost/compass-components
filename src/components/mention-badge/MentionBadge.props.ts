import { TMentionBadgeSize } from './MentionBadge.types';

type PMentionBadge = {
    inverted?: boolean;
    background?: string;
    mentions?: number;
    mentionLimit?: number;
    size?: TMentionBadgeSize;
    className?: string;
};

export default PMentionBadge;
