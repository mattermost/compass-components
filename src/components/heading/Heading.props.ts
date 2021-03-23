import { PType } from '../../foundations/type';

import { THeadingSize, THeadingVariant } from './Heading.types';

export type PHeading = Pick<PType, 'color' | 'margin' | 'weight'> & {
    className?: string;
    /**
     * the size-token used to render the text size.
     * If not set manually it derives from the variant `h1` - `h6`
     *
     * There is a default for a case where `variant` is not manually set as well
     * @default '100'
     * */
    size?: THeadingSize;
    /**
     * for heading components the range is `h1` - `h6`
     * @default 'h6'
     * */
    variant?: THeadingVariant;
};
