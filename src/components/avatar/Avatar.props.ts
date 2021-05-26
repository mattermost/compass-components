import { TAvatarSizeToken, TAvatarStatus } from './Avatar.types';

type PAvatar = {
    name: string;
    isTeam?: boolean;
    mentions?: number;
    lastName?: string;
    image?: string;
    size?: TAvatarSizeToken;
    status?: TAvatarStatus;
    className?: string;
};

export default PAvatar;
