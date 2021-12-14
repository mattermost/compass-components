import type { MouseEventHandler } from 'react';

import type { TIconGlyph } from '../../foundations/icon';

import type { TIconButtonElement, TIconButtonSizeToken } from './IconButton.types';

type PIconButton = {
    /**
     * the icon that should be displayed inside the IconButton
     */
    icon: TIconGlyph;
    /**
     * if needed the IconButton can be rendered with a different HTML element
     * @default 'button'
     */
    element?: TIconButtonElement;
    /**
     * the size token to define the IconButton size
     * @default 'md'
     */
    size?: TIconButtonSizeToken;
    /**
     * render the compact version with reduced padding (-4px on both axis)
     * @default false
     */
    compact?: boolean;
    /**
     * define if the icon is in toggled state
     * @default false
     */
    toggled?: boolean;
    /**
     * define if the icon is in (forced) active state
     * @default false
     */
    active?: boolean;
    /**
     * define if the icons action is destructive
     * @default false
     */
    destructive?: boolean;
    /**
     * define if the icon is in disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * show a label to the right of the Icon
     */
    label?: string;
    /**
     * click-event handler
     */
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    /**
     * custom className
     */
    className?: string;
};

export type PIconButtonRoot = Required<
    Omit<PIconButton, 'element' | 'className' | 'icon' | 'label' | 'onClick'>
>;

export default PIconButton;
