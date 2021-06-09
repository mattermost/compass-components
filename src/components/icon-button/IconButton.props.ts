import { TIconGlyph } from '../icon';

import { TIconButtonSizeToken } from './IconButton.types';

type PIconButton = {
    /**
     * the icon that should be displayed inside the IconButton
     */
    icon: TIconGlyph;
    /**
     * the size token to define the IconButton size
     * @default 'md'
     */
    size?: TIconButtonSizeToken;
    text?: string;
    className?: string;
};

export type PIconButtonRoot = {
    /**
     * the size token to define the IconButton size
     * @default 'md'
     */
    size?: TIconButtonSizeToken;
};

export default PIconButton;
