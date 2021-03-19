import { TIconSize } from '../../foundations/icon';
import { TTextSize } from '../text';

import { TIconButtonSize } from './IconButton.types';

const DEFAULT_ICON_BUTTON_SIZE: TIconButtonSize = 'standard';

const ICON_BUTTON_SIZES: TIconButtonSize[] = [
    'xsmall',
    'small-compact',
    'small',
    'standard',
    'large',
];

const ICON_BUTTON_TEXT_SIZES: Record<TIconButtonSize, TTextSize> = {
    xsmall: 75,
    'small-compact': 100,
    small: 100,
    standard: 200,
    large: 300,
};

const ICON_BUTTON_ICON_SIZES: Record<TIconButtonSize, TIconSize> = {
    xsmall: 12,
    'small-compact': 16,
    small: 16,
    standard: 20,
    large: 28,
};

const ICON_BUTTON_DIMENSIONS: Record<TIconButtonSize, number> = {
    xsmall: 24,
    'small-compact': 28,
    small: 32,
    standard: 40,
    large: 48,
};

const ICON_BUTTON_PADDING: Record<TIconButtonSize, number> = {
    xsmall: 6,
    'small-compact': 6,
    small: 8,
    standard: 10,
    large: 10,
};

const ICON_BUTTON_SPACING: Record<TIconButtonSize, number> = {
    xsmall: 4,
    'small-compact': 4,
    small: 4,
    standard: 6,
    large: 6,
};

export {
    DEFAULT_ICON_BUTTON_SIZE,
    ICON_BUTTON_SIZES,
    ICON_BUTTON_TEXT_SIZES,
    ICON_BUTTON_ICON_SIZES,
    ICON_BUTTON_DIMENSIONS,
    ICON_BUTTON_PADDING,
    ICON_BUTTON_SPACING,
};
