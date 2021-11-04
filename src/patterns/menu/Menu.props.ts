import type React from 'react';

import type { TShapeElement as TMenuContainer } from '../../foundations/shape';
import type {
    TPopoverOffset as TMenuOffset,
    TPopoverPlacement as TMenuPlacement,
} from '../../utilities/popover';

import type { TMenuGroup, TMenuTrigger } from './Menu.types';

type PMenu = {
    /**
     * the element used to toggle the menu
     */
    trigger: TMenuTrigger;
    /**
     * if the trigger should be rendered on the page
     * @default true
     */
    renderTrigger?: boolean;
    /**
     * menu title if provided
     */
    title?: string;
    /**
     * if a specific container is needed
     * @default null
     */
    container?: TMenuContainer;
    /**
     * if width is specified for the container
     * @default 'auto'
     */
    width?: number | string | 'auto';
    /**
     * a container that holds related menu items
     */
    groups: TMenuGroup[];
    /**
     * optionally add a title to the group
     */
    placement: TMenuPlacement;
    offset?: TMenuOffset;
    isVisible: boolean;
    hasSubmenu: boolean;
    /**
     * onClick event handler
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * custom className
     */
    className?: string;
};

export default PMenu;
