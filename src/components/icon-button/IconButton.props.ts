import { TIconGlyph } from '../../foundations/icon';

import { TIconButtonElement, TIconButtonSizeToken } from './IconButton.types';

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
     * define if the icon is in toggled state
     * @default false
     */
    toggled?: boolean;
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
     * define if the icon is showing in an inverted style
     * @default false
     */
    inverted?: boolean;
    /**
     * show a label to the right of the Icon
     */
    label?: string;
    /**
     * custom className
     */
    className?: string;
};

export type PIconButtonRoot = Omit<PIconButton, 'element' | 'className' | 'icon' | 'label'>;

export default PIconButton;
