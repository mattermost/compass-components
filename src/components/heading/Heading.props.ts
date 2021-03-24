import { PTypography } from '../../foundations/typography';

import { THeadingSize, THeadingElement } from './Heading.types';

export type PHeading = Pick<PTypography, 'color' | 'margin' | 'weight'> & {
    className?: string;
    /**
     * the size-token used to render the text size.
     *
     * There is a default for a case where `element` is not manually set as well
     * @default '100'
     * */
    size?: THeadingSize;
    /**
     * for heading components the range is `h1` - `h6`.
     * If not set manually set it derives the element from the size
     * */
    element?: THeadingElement;
};
