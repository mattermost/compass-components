import { TAvatarSizeToken, TAvatarStatus } from './Avatar.types';

type PAvatar = {
    /**
     * the name to be displayed in the fallback avatar.
     * can be a user- or a team-name
     */
    name: string;
    /**
     * is the avatar used as a team-avatar?
     * @default false
     */
    isTeam?: boolean;
    /**
     * is the team-avatar active?
     * @default false
     */
    isActive?: boolean;
    mentions?: number;
    lastName?: string;
    image?: string;
    size?: TAvatarSizeToken;
    status?: TAvatarStatus;
    className?: string;
    onClick: () => void;
};

export default PAvatar;
