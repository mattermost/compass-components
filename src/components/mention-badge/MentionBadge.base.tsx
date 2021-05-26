import React from 'react';

import PMentionBadge from './MentionBadge.props';

const MentionBadgeBase: React.FC<PMentionBadge> = ({
    mentionCount = 1,
    mentionLimit = 99,
    className,
    ...rest
}: PMentionBadge): JSX.Element => {
    const isUnreadBadge = mentionCount === 0;

    return (
        <div className={className} {...rest}>
            {!isUnreadBadge && (mentionCount > mentionLimit ? `${mentionLimit}+` : mentionCount)}
        </div>
    );
};

export default MentionBadgeBase;
