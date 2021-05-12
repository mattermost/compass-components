import { TTextSizeToken } from '../../text';
import { TRadius } from '../Shape';
import { TSpacing } from '../Layout';

import { TButtonSize } from './Button.types';

const PADDING: Record<TButtonSize, TSpacing> = {
    xsmall: 8,
    small: 16,
    medium: 24,
    large: 32,
};
const SIZES: Record<TButtonSize, string> = {
    xsmall: '20px',
    small: '30px',
    medium: '40px',
    large: '50px',
};
const TEXT_SIZES: Record<TButtonSize, TTextSizeToken> = {
    xsmall: 50,
    small: 75,
    medium: 100,
    large: 200,
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
