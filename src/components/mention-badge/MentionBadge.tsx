import React from 'react';

import {
    DEFAULT_MENTIONBADGE_SIZE,
    DEFAULT_MENTIONBAGDE_MENTION_LIMIT,
    DEFAULT_MENTIONBAGDE_MENTIONS,
} from './MentionBadge.constants';
import PMentionBadge from './MentionBadge.props';
import MentionBadgeRoot from './MentionBadge.root';

const MentionBadge: React.FC<PMentionBadge> = ({
    mentions = DEFAULT_MENTIONBAGDE_MENTIONS,
    mentionLimit = DEFAULT_MENTIONBAGDE_MENTION_LIMIT,
    size = DEFAULT_MENTIONBADGE_SIZE,
    inverted = false,
    className,
    children,
    ...rest
}: PMentionBadge): JSX.Element => {
    const isUnreadBadge = mentions === 0;

    const rootProperties = {
        className,
        size,
        inverted,
        isUnreadBadge,
        mentionStringLength: mentions.toString().length,
    };

    return (
        <MentionBadgeRoot {...rootProperties} {...rest}>
            {!isUnreadBadge && (mentions > mentionLimit ? `${mentionLimit}+` : mentions)}
            {children}
        </MentionBadgeRoot>
    );
};

export default MentionBadge;
