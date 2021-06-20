import { ReactNode } from 'react';

import { TMentionBadgeSizeToken } from './MentionBadge.types';

type PMentionBadge = {
    /**
     * use the inverted version with a contrasting color to primary as background
     * @default false
     */
    inverted?: boolean;
    /**
     * override the background color
     */
    background?: string;
    /**
     * the number of mentions ot display.
     * If set to zero the MentionBadge will show as UnreadBadge
     */
    mentions?: number;
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
    className?: string;
    children?: ReactNode | ReactNode[];
};

export type PMentionBadgeRoot = Required<Pick<PMentionBadge, 'inverted' | 'size'>> &
    Pick<PMentionBadge, 'background'> & {
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
