import { TIconGlyph } from '../icon';

import { TButtonSize, TButtonVariant, TButtonWidth } from './Button.types';

export type PButton = {
    label: string;
    disabled?: boolean;
    destructive?: boolean;
    variant?: TButtonVariant;
    width?: TButtonWidth;
    size?: TButtonSize;
    leadingIcon?: TIconGlyph;
    trailingIcon?: TIconGlyph;
    className?: string;
    onClick: () => void;
};
