import { TIconGlyph } from '../../foundations/icon';

import { TIconButtonSize } from './IconButton.types';

type PIconButton = {
    ariaLabel?: string;
    className?: string;
    size?: TIconButtonSize;
    iconGlyph: TIconGlyph;
    disabled?: boolean;
    destructive?: boolean;
    label?: string;
};

type PStyledIconButton = {};

export type { PIconButton, PStyledIconButton };
