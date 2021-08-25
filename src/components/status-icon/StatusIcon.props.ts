import { TStatusIconSize, TStatusIconStatus } from './StatusIcon.types';

type PStatusIcon = {
    /**
     * the status the StatusIcon will show
     */
    status: TStatusIconStatus;
    /**
     * size token that defines the sizing for the StatusIcon
     * @default 16
     */
    size?: TStatusIconSize;
    /**
     * custom className
     */
    className?: string;
};

export type PStatusIconRoot = Required<Pick<PStatusIcon, 'size'>> & Pick<PStatusIcon, 'status'>;

export default PStatusIcon;
