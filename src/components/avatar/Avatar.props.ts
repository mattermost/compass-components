import { TAvatarSizeToken } from './Avatar.types';

type PAvatar = {
    userName: string;
    image?: string;
    size?: TAvatarSizeToken;
    name?: string;
    lastName?: string;
    className?: string;
};

export default PAvatar;
