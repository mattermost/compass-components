import { TComponentSizeToken } from '../../shared/shared.types';

import { TStatusBadgeStatus } from './StatusBadge.types';

type PStatusBadge = {
    background?: string;
    status: TStatusBadgeStatus;
    size?: TComponentSizeToken;
};

export default PStatusBadge;
