import { TAvatarSizeToken, TAvatarStatus } from './Avatar.types';

type PAvatar = {
    userName: string;
    name?: string;
    lastName?: string;
    image?: string;
    size?: TAvatarSizeToken;
    status?: TAvatarStatus;
    className?: string;
};

export default PAvatar;
