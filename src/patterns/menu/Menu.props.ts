import type React from 'react';

import type { TMenuGroup } from './Menu.types';

type PMenu = {
    /**
     * the element used to toggle the menu
     */
    trigger: React.MutableRefObject<null>;
    /**
     * menu title if provided
     */
    title?: string | React.ReactElement;
    /**
     * if width is specified for the container
     * @default 'auto'
     */
    width?: number | string | 'auto';
    /**
     * if height is specified for the container
     * @default 'auto'
     */
    height?: number | string | 'auto';
    /**
     * a container that holds related menu items
     */
    groups: TMenuGroup[];
    /**
     * optionally add a title to the group
     */
    isVisible: boolean;
    /**
     * onClick event handler
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * custom className
     */
    className?: string;
};

type PMenuRoot = Pick<PMenu, 'width' | 'height'> & { isMobile: boolean };

type PMenuLabelRoot = Pick<PMenuRoot, 'isMobile'>;

export type { PMenuRoot, PMenuLabelRoot };

export default PMenu;
