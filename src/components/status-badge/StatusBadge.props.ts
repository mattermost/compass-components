import { TStatusBadgeSizeToken, TStatusBadgeStatus } from './StatusBadge.types';

type PStatusBadge = {
    status: TStatusBadgeStatus;
    background?: string;
    size?: TStatusBadgeSizeToken;
    className?: string;
};

export type PStatusBadgeRoot = Required<Pick<PStatusBadge, 'size'>> &
    Pick<PStatusBadge, 'background' | 'status'>;

export default PStatusBadge;
