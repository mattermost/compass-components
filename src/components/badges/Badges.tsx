import React from 'react';

import SBadges from './Badges.styles';
import { PBadges, PStyledBadges } from './Badges.props';

const Badges: React.FC<PBadges> = ({
    type = 'mention',
    subType = 'sidebar',
    borderRadius = '0',
    size = 'sm',
    content = '10',
    background = 'none',
}: PBadges): JSX.Element => {
    const styledBadgesProperties: PStyledBadges = {
        padding: 'initial',
        borderRadius: '0',
        background: 'none',
        boxShadow: 'none',
        content: '1',
    };

    switch (type) {
        case 'mention':
            styledBadgesProperties.padding = '1px 7px';
            styledBadgesProperties.boxShadow = '0 0 0 3px #0b428c';
            styledBadgesProperties.borderRadius = '8px';
            styledBadgesProperties.background = 'rgb(255, 255, 255)';
            styledBadgesProperties.color = 'rgb(20, 93, 191)';
            break;
        case 'unread':
            styledBadgesProperties.padding = '0';
            styledBadgesProperties.borderRadius = '100%';
            styledBadgesProperties.background = 'rgb(255, 255, 255)';
            styledBadgesProperties.content = '';
            break;
        case 'status':
            let iconName = 'icon-circle-outline';

            if (status === 'online') {
                iconName = 'icon-check-circle';
            } else if (status === 'away') {
                iconName = 'icon-clock';
            } else if (status === 'dnd') {
                iconName = 'icon-minus-circle';
            }

            styledBadgesProperties.content = <i className={`${iconName}`} />;
            styledBadgesProperties.padding = '0';
            styledBadgesProperties.borderRadius = '100%';
            styledBadgesProperties.background = 'green';
            break;
        default:
            break;
    }

    return (
        <SBadges type={type} size={size} content={content} {...styledBadgesProperties}>
            {content}
        </SBadges>
    );
};

export default Badges;
