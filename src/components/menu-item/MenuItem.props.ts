import type React from 'react';

type PMenuItem = {
    /**
     * the main label to show on the menu item
     */
    label: string;
    /**
     * show the secondary label right to the main label when set to true
     * @default false
     */
    inlineDescription?: boolean;
    /**
     * is the menuItem of destructive (chaotic-evil) nature?
     * @default false
     */
    destructive?: boolean;
    /**
     * is the menuItem disabled?
     * @default false
     */
    disabled?: boolean;
    /**
     * add a leading element to the menu item. aka "supporting visual" :D
     */
    leadingElement?: React.ReactElement;
    /**
     * trailing element that displays bound to the right edge of the menu item
     */
    trailingElement?: React.ReactElement;
    /**
     * label to describe the trailing element
     * it will be shown to the left of the label
     */
    trailingElementLabel?: string;
    /**
     * secondary label.
     * can be placed beneath (is default) or to the right of the main label
     */
    description?: string;
    /**
     * whether a divider should be rendered below
     */
    divider?: boolean;
    /**
     * onClick event handler
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * onClick event handler
     */
    onHover?: React.MouseEventHandler<HTMLElement>;
    /**
     * custom className
     */
    className?: string;
};

type PMenuItemRoot = Required<Pick<PMenuItem, 'destructive' | 'disabled'>>;

type PMenuItemTextRoot = { withMargin?: boolean };

export type { PMenuItemRoot, PMenuItemTextRoot };

export default PMenuItem;
