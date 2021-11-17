import React from 'react';

import type { TIconGlyph } from '../../foundations/icon';

import type PStatusIcon from './StatusIcon.props';
import { DEFAULT_STATUSICON_SIZE, STATUSICON_SIZE_MAP } from './StatusIcon.constants';
import StatusIconRoot from './StatusIcon.root';

const StatusIcon: React.FC<PStatusIcon> = (props: PStatusIcon) => {
    const { status, size = DEFAULT_STATUSICON_SIZE, ...rest } = props;

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
        size: STATUSICON_SIZE_MAP[size],
        ...rest,
    };

    return <StatusIconRoot {...rootProperties} />;
};

export default StatusIcon;
