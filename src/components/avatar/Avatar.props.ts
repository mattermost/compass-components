import { TAvatarSizeToken, TAvatarStatus, TAvatarVariant } from './Avatar.types';

type PAvatar = {
    variant: TAvatarVariant;
    /**
     * the name to be displayed in the fallback avatar.
     * It gets capitalized and shortened to a maximum of 2 characters
     */
    name: string;
    /**
     * adds a hover effect to the avatar
     * @default false
     */
    disableHover?: boolean;
    /**
     * will display a border even without the hover state and hovering
     * only changes the color of the border from secondary main color to
     * primary main color
     * @default false
     */
    isActive?: boolean;
    /**
     * show a `mentionBadge` on the top-right corner.
     * With 0 mentions it will just show an `unreadBadge` indicator
     */
    mentions?: number;
    /**
     * URL to fetch an avatar image.
     */
    image?: string;
    /**
     * the size token to define the Avatar size
     * @default 'md'
     */
    size?: TAvatarSizeToken;
    /**
     * show a `StatusBadge` onm the bottom right of the avatar
     */
    status?: TAvatarStatus;
    /**
     * click event handler
     */
    onClick: () => void;
    className?: string;
};

export default PAvatar;
