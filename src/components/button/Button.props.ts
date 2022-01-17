import type { MouseEventHandler } from 'react';

import type { TIconGlyph } from '../../foundations/icon';

import type {
    TButtonIconPosition,
    TButtonSizeToken,
    TButtonVariant,
    TButtonWidth,
} from './Button.types';

type PButton = {
    /**
     * the label to be shown for the button. This will be normalized and used
     * as the 'aria-label' attribute id no 'aria-label' is added as property
     */
    label: string;
    /**
     * define if the icon is in (forced) active state
     * @default false
     */
    active?: boolean;
    /**
     * when pushing a button is potentially harmful use this property to show a
     * visual hint to that (button turns red/to the defined alert color)
     * @default false
     */
    destructive?: boolean;
    /**
     * disable a button with this property. It won't be clickable and shows a
     * visual hint on the cursor, that interaction is not possible
     * @default false
     */
    disabled?: boolean;
    /**
     * there are 3 different variants for buttons:
     *  'primary': a full-colored, bold and visually string button
     *  'secondary': bordered, without background-color
     *  'tertiary': no-border, with opaque background color
     *  @default 'primary'
     */
    variant?: TButtonVariant;
    /**
     * either set a numerical width in px, set it to 'full' to span the
     * full-width or leave it as is ('dynamic') to let the content define
     * the width
     * @default 'dynamic'
     */
    width?: TButtonWidth;
    /**
     * sizing for the buttons. 'sm' (small), 'md' (medium) and 'lg' (large)
     * @default 'md'
     */
    size?: TButtonSizeToken;
    /**
     * where should the icon be positioned?
     * @default 'start'
     */
    iconPosition?: TButtonIconPosition;
    /**
     * when you want to use a Icon in the button pass the iconglyph (name) here
     */
    icon?: TIconGlyph;
    /**
     * click-event handler
     */
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    /**
     * custom className
     */
    className?: string;
};

type PButtonRoot = Required<
    Pick<PButton, 'active' | 'destructive' | 'disabled' | 'variant' | 'width' | 'size'>
>;

type PButtonIconRoot = {
    margin: number;
    marginPosition: 'left' | 'right';
};

export type { PButtonRoot, PButtonIconRoot };

export default PButton;
