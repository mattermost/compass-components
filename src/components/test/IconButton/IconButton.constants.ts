import { TTextSizeToken } from '../../text';
import { TRadius } from '../Shape';
import { TSpacing } from '../Layout';

import { TIconButtonSize } from './IconButton.types';

const PADDING: Record<TIconButtonSize, TSpacing> = {
    xsmall: 8,
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 40,
};
const SIZES: Record<TIconButtonSize, string> = {
    xsmall: '20px',
    small: '30px',
    medium: '40px',
    large: '50px',
    xlarge: '60px',
};
const TEXT_SIZES: Record<TIconButtonSize, TTextSizeToken> = {
    xsmall: 50,
    small: 75,
    medium: 100,
    large: 200,
    xlarge: 300,
};
const DEFAULT_PADDING: TSpacing = PADDING.medium;
const DEFAULT_RADIUS: TRadius = 4;
const DEFAULT_SIZE: string = SIZES.medium;
const DEFAULT_TEXT_SIZE: TTextSizeToken = TEXT_SIZES.medium;

export {
    PADDING,
    SIZES,
    TEXT_SIZES,
    DEFAULT_PADDING,
    DEFAULT_RADIUS,
    DEFAULT_SIZE,
    DEFAULT_TEXT_SIZE,
};
