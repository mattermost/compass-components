import type { TransientProperty } from '../../shared/type-utils';

import type { TIconColor, TIconGlyph, TIconSize } from './Icon.types';

type PIcon = {
    /**
     * the size the icon is rendered with
     * @default 20
     */
    size?: TIconSize;
    /**
     * the color token the Icon should be rendered with.
     * when not passed a value it will inherit the color.
     * @default 'inherit'
     */
    color?: TIconColor;
    /**
     * the icon-glyph that is being rendered
     */
    glyph?: TIconGlyph;
    /**
     * add an aria-label for a11y
     */
    ariaLabel?: string;
    /**
     * custom className
     */
    className?: string;
    /**
     * onClick handler
     */
    onClick?: () => void;
};

export type PIconRoot = TransientProperty<Required<Pick<PIcon, 'size' | 'color'>>> &
    Required<Pick<PIcon, 'glyph'>> &
    Pick<PIcon, 'ariaLabel' | 'className'>;

export default PIcon;
