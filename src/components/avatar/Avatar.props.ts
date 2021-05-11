import { TAvatarSizeToken, TAvatarStatus } from './Avatar.types';

type PAvatar = {
    userName: string;
    isTeam?: boolean;
    mentionCount?: number;
    name?: string;
    lastName?: string;
    image?: string;
    size?: TAvatarSizeToken;
    status?: TAvatarStatus;
    className?: string;
};

export default PAvatar;
