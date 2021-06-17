import { TMentionBadgeSize } from './MentionBadge.types';

type PMentionBadge = {
    inverted?: boolean;
    background?: string;
    mentions?: number;
    mentionLimit?: number;
    size?: TMentionBadgeSize;
    className?: string;
};

export type PMentionBadgeRoot = Required<Pick<PMentionBadge, 'inverted' | 'size'>> &
    Pick<PMentionBadge, 'background'> & {
        isUnreadBadge: boolean;
        mentionStringLength: number;
    };

export default PMentionBadge;
