import { TIconGlyph } from '../icon';

import { TButtonSize, TButtonVariant, TButtonWidth } from './Button.types';

type PButtonBase = Omit<PButton, 'variant'> & {
    'data-destructive'?: boolean;
    'data-variant'?: TButtonVariant;
};

type PButton = {
    label: string;
    disabled?: boolean;
    destructive?: boolean;
    variant?: TButtonVariant;
    width?: TButtonWidth;
    size?: TButtonSize;
    leadingIcon?: TIconGlyph;
    trailingIcon?: TIconGlyph;
    className?: string;
};

export type { PButtonBase, PButton };
