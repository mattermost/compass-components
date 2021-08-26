import { TStatusIconSize, TStatusIconSizeToken, TStatusIconStatus } from './StatusIcon.types';

type PStatusIcon = {
    /**
     * the status the StatusIcon will show
     */
    status: TStatusIconStatus;
    /**
     * size token that defines the sizing for the StatusIcon
     * @default 'md'
     */
    size?: TStatusIconSizeToken;
    /**
     * custom className
     */
    className?: string;
};

export type PStatusIconRoot = Pick<PStatusIcon, 'status'> & { size: TStatusIconSize };

export default PStatusIcon;
