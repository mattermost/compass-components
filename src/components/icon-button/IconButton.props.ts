import { TIconGlyph } from '../icon';

import { TIconButtonElement, TIconButtonSizeToken } from './IconButton.types';

type PIconButton = {
    element?: TIconButtonElement;
    /**
     * the icon that should be displayed inside the IconButton
     */
    icon: TIconGlyph;
    /**
     * the size token to define the IconButton size
     * @default 'md'
     */
    size?: TIconButtonSizeToken;
    /**
     * show a label to the right of the Icon
     */
    label?: string;
    toggled?: boolean;
    destructive?: boolean;
    disabled?: boolean;
    inverted?: boolean;
    className?: string;
};

export type PIconButtonRoot = Omit<PIconButton, 'element' | 'className' | 'icon' | 'label'>;

export default PIconButton;
