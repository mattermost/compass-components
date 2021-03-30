import { TIconGlyph, TIconSize } from './Icon.types';

export type PIcon = {
    /**
     * the icon-glyph that is being rendered
     *
     * @default 'mattermost'
     * */
    glyph?: TIconGlyph;
    /**
     * the size the icon is rendered with
     *
     * @default 10
     * */
    size?: TIconSize;
    /** add an aria-label for a11y */
    ariaLabel?: string;
    className?: string;
};
