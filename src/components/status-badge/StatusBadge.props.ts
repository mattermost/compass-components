import { TStatusBadgeSizeToken, TStatusBadgeStatus } from './StatusBadge.types';

type PStatusBadge = {
    /**
     * the status the StatusBadge will show
     */
    status: TStatusBadgeStatus;
    /**
     * size token that defines the sizing for the StatusBadge
     * @default 'md'
     */
    size?: TStatusBadgeSizeToken;
    /**
     * override the default background
     */
    background?: string;
    className?: string;
};

export type PStatusBadgeRoot = Required<Pick<PStatusBadge, 'size'>> &
    Pick<PStatusBadge, 'background' | 'status'>;

export default PStatusBadge;
