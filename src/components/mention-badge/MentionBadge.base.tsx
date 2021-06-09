import React from 'react';

import PMentionBadge from './MentionBadge.props';

const MentionBadgeBase: React.FC<PMentionBadge> = ({
    mentions = 1,
    mentionLimit = 99,
    className,
    ...rest
}: PMentionBadge): JSX.Element => {
    const isUnreadBadge = mentions === 0;

    return (
        <div className={className} {...rest}>
            {!isUnreadBadge && (mentions > mentionLimit ? `${mentionLimit}+` : mentions)}
        </div>
    );
};

export default MentionBadgeBase;
