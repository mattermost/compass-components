import React from 'react';

import Icon, { TIconGlyph } from '../icon';

import PStatusBadge from './StatusBadge.props';
import { DEFAULT_STATUSBADGE_SIZE, STATUSBADGE_SIZE_MAP } from './StatusBadge.constants';

const StatusBadgeBase: React.FC<PStatusBadge> = ({
    size = DEFAULT_STATUSBADGE_SIZE,
    status,
    ...rest
}: PStatusBadge): JSX.Element => {
    let glyph: TIconGlyph = 'circle-outline';

    switch (status) {
        case 'away':
            glyph = 'clock';
            break;
        case 'dnd':
            glyph = 'minus-circle';
            break;
        case 'online':
            glyph = 'check-circle';
            break;
        case 'offline':
        default:
    }

    return (
        <div {...rest}>
            <Icon glyph={glyph} size={STATUSBADGE_SIZE_MAP[size]} />
        </div>
    );
};

export default StatusBadgeBase;
