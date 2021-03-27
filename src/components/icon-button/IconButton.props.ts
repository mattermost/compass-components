import { TIconGlyph } from '../icon';

import { TIconButtonSize } from './IconButton.types';

export type PIconButton = {
    ariaLabel?: string;
    className?: string;
    destructive?: boolean;
    disabled?: boolean;
    iconGlyph?: TIconGlyph;
    inverted?: boolean;
    label?: string;
    size?: TIconButtonSize;
    toggled?: boolean;
};
