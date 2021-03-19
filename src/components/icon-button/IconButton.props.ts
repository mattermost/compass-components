import { TIconGlyph } from '../../foundations/icon';

import { TIconButtonSize } from './IconButton.types';

export type PIconButton = {
    ariaLabel?: string;
    className?: string;
    destructive?: boolean;
    disabled?: boolean;
    iconGlyph?: TIconGlyph;
    label?: string;
    size?: TIconButtonSize;
    toggled?: boolean;
};
