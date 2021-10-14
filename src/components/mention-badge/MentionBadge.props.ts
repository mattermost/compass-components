import type { TMentionBadgeSizeToken } from './MentionBadge.types';

type PMentionBadge = {
    /**
     * use the inverted version with a contrasting color to primary as background
     * @default false
     */
    inverted?: boolean;
    /**
     * the limit, which defines the maximum of mentions that can be displayed
     * @default 99
     */
    mentionLimit?: number;
    /**
     * the size token that defines the sizing of the MentionBadge
     * @default 'lg'
     */
    size?: TMentionBadgeSizeToken;
    /**
     * override the border color (to fake the transparent border/punch-out)
     * @default theme.background.default
     */
    borderColor?: string;
    /**
     * the number of mentions ot display.
     * If set to zero the MentionBadge will show as UnreadBadge
     */
    mentions?: number;
    /**
     * custom className
     */
    className?: string;
};

export type PMentionBadgeRoot = Required<Pick<PMentionBadge, 'inverted' | 'size'>> &
    Pick<PMentionBadge, 'borderColor'> & {
        /**
         * should the MentionBadgeRoot be rendered as UnreadBadge
         * @default false
         */
        isUnreadBadge: boolean;
        /**
         * the length of the mentions parsed as string to determine the width of the MentionBadge
         */
        mentionStringLength: number;
    };

export default PMentionBadge;
