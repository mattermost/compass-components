import type { PGlobals } from '../../shared/props';

import type { TFlexAlignment, TFlexElement, TFlexFlex, TFlexJustify } from './Flex.types';

type PFlex = PGlobals & {
    /**
     * flex value to use
     * @default 'initial'
     */
    flex?: TFlexFlex;
    /**
     * renders the `Grid` component as a row (`flex-direction: row`)
     * @default false
     */
    row?: boolean;
    /**
     * wrap content?
     * @default false
     */
    wrap?: boolean;
    /**
     * the HTML tag that is used to render the component
     * @default 'div'
     */
    element?: TFlexElement;
    /**
     * defines the vertical alignment of items inside the component
     * @default 'start'
     */
    alignment?: TFlexAlignment;
    /**
     * defines the horizontal alignment of items inside the component
     * @default 'start'
     */
    justify?: TFlexJustify;
    /**
     * restrict the width of a `Grid`
     */
    width?: number;
    /**
     * restrict the height of a `Grid`
     */
    height?: number;
};

export type PFlexRoot = Required<
    Omit<PFlex, 'element' | 'className' | 'children' | 'width' | 'height' | 'padding' | 'margin'>
> &
    Pick<PFlex, 'width' | 'height' | 'padding' | 'margin'>;

export default PFlex;
