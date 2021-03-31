import { TIconSize } from '../icon';
import { TTextSize } from '../text';

import { TIconButtonSize, TIconButtonProperties } from './IconButton.types';

const DEFAULT_ICON_BUTTON_SIZE: TIconButtonSize = 'standard';

const ICON_BUTTON_SIZES: TIconButtonSize[] = [
    'xsmall',
    'small-compact',
    'small',
    'standard',
    'large',
];

const ICON_BUTTON_PROPERTIES: Record<TIconButtonSize, TIconButtonProperties> = {
    xsmall: {
        textSize: 75,
        iconSize: 12,
        dimensions: 24,
        padding: 4,
        spacing: 4,
    },
    'small-compact': {
        textSize: 100,
        iconSize: 16,
        dimensions: 24,
        padding: 4,
        spacing: 4,
    },
    small: {
        textSize: 100,
        iconSize: 16,
        dimensions: 32,
        padding: 6,
        spacing: 4,
    },
    standard: {
        textSize: 200,
        iconSize: 20,
        dimensions: 40,
        padding: 8,
        spacing: 6,
    },
    large: {
        textSize: 300,
        iconSize: 28,
        dimensions: 48,
        padding: 6,
        spacing: 6,
    },
};

export { DEFAULT_ICON_BUTTON_SIZE, ICON_BUTTON_SIZES, ICON_BUTTON_PROPERTIES };
