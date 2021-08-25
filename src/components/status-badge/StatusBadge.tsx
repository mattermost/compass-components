import React from 'react';

import StatusIcon from '../status-icon';

import PStatusBadge from './StatusBadge.props';
import { DEFAULT_STATUSBADGE_SIZE, STATUSBADGE_SIZE_MAP } from './StatusBadge.constants';
import StatusBadgeRoot from './StatusBadge.root';

const StatusBadge: React.FC<PStatusBadge> = ({
    status,
    size = DEFAULT_STATUSBADGE_SIZE,
    ...rest
}: PStatusBadge): JSX.Element => {
    const rootProperties = {
        size,
        status,
        ...rest,
    };

    return (
        <StatusBadgeRoot {...rootProperties}>
            <StatusIcon status={status} size={STATUSBADGE_SIZE_MAP[size]} />
        </StatusBadgeRoot>
    );
};

export default StatusBadge;
