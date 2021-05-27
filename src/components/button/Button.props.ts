import { TIconGlyph } from '../icon';

import { TButtonIconPosition, TButtonSize, TButtonVariant, TButtonWidth } from './Button.types';

export type PButton = {
    label: string;
    destructive?: boolean;
    inverted?: boolean;
    disabled?: boolean;
    variant?: TButtonVariant;
    width?: TButtonWidth;
    size?: TButtonSize;
    icon?: TIconGlyph;
    iconPosition?: TButtonIconPosition;
    className?: string;
    onClick: () => void;
};
