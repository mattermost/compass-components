import type { TStatusBadgeSizeToken, TStatusBadgeStatus } from './StatusBadge.types';

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
     * @default theme.background.default
     */
    background?: string;
    /**
     * custom className
     */
    className?: string;
};

export type PStatusBadgeRoot = Required<Pick<PStatusBadge, 'size'>> &
    Pick<PStatusBadge, 'background'>;

export default PStatusBadge;
