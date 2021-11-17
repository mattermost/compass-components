import React from 'react';

import StatusIcon from '../status-icon';

import type PStatusBadge from './StatusBadge.props';
import { DEFAULT_STATUSBADGE_SIZE } from './StatusBadge.constants';
import StatusBadgeRoot from './StatusBadge.root';

const StatusBadge: React.FC<PStatusBadge> = (props: PStatusBadge) => {
    const { status, size = DEFAULT_STATUSBADGE_SIZE, ...rest } = props;

    const rootProperties = {
        size,
        status,
        ...rest,
    };

    return (
        <StatusBadgeRoot {...rootProperties}>
            <StatusIcon status={status} size={size} />
        </StatusBadgeRoot>
    );
};

export default StatusBadge;
