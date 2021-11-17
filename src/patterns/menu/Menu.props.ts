import type React from 'react';

import type { TonClickAwayCallback } from '../../shared';

import type { TMenuData, TMenuPlacement } from './Menu.types';

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
     * optionally add a title to the group
     */
    isVisible: boolean;
    /**
     * optionally add a title to the group
     */
    isMobile: boolean;
    /**
     * data to be rendered by the menu
     */
    data: TMenuData;
    /**
     * optionally pass different placement
     */
    placement: TMenuPlacement;
    /**
     * onClickAway callback
     */
    onClickAway?: TonClickAwayCallback;
    /**
     * onClick event handler
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * custom className
     */
    className?: string;
};

type PSubmenu = Pick<PMenu, 'data' | 'isMobile'>;

type PMenuRoot = Pick<PMenu, 'width' | 'height' | 'isMobile'>;

type PMenuLabelRoot = Pick<PMenuRoot, 'isMobile'>;

export type { PSubmenu, PMenuRoot, PMenuLabelRoot };

export default PMenu;
