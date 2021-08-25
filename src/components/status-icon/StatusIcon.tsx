import React from 'react';

import { TIconGlyph } from '../../foundations/icon';

import PStatusIcon from './StatusIcon.props';
import { DEFAULT_STATUSICON_SIZE } from './StatusIcon.constants';
import StatusIconRoot from './StatusIcon.root';

const StatusIcon: React.FC<PStatusIcon> = ({
    status,
    size = DEFAULT_STATUSICON_SIZE,
    ...rest
}: PStatusIcon): JSX.Element => {
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

    const rootProperties = {
        status,
        glyph,
        size,
        ...rest,
    };

    return <StatusIconRoot {...rootProperties} />;
};

export default StatusIcon;
