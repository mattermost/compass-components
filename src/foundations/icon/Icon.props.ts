import { TIconColor, TIconGlyph, TIconSize } from './Icon.types';

type PIcon = {
    /**
     * the size the icon is rendered with
     * @default 20
     */
    size?: TIconSize;
    /**
     * the icon-glyph that is being rendered
     * @default 'mattermost'
     */
    glyph?: TIconGlyph;
    /**
     * the color token the Icon should be rendered with.
     * when not passed a value it will inherit the color.
     */
    color?: TIconColor;
    /**
     * add an aria-label for a11y
     */
    ariaLabel?: string;
    className?: string;
};

export type PIconRoot = Required<Pick<PIcon, 'size' | 'color' | 'glyph'>> &
    Pick<PIcon, 'ariaLabel'>;

export default PIcon;
