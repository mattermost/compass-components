import { TStatusBadgeSizeToken, TStatusBadgeStatus } from './StatusBadge.types';

type PStatusBadge = {
    background?: string;
    status: TStatusBadgeStatus;
    size?: TStatusBadgeSizeToken;
};

export default PStatusBadge;
