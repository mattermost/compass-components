import type {
    TIconButtonSizeToken,
    TIconButtonDefinition,
    TIconButtonElement,
} from './IconButton.types';

const ICON_BUTTON_SIZES: TIconButtonSizeToken[] = ['xs', 'sm', 'md', 'lg'];

const ICON_BUTTON_SIZE_LABELS: { [size in TIconButtonSizeToken]: string } = {
    xs: 'x-small',
    sm: 'small',
    md: 'medium',
    lg: 'large',
};

const DEFAULT_ICON_BUTTON_SIZE: TIconButtonSizeToken = 'md';

const ICON_BUTTON_ELEMENTS: TIconButtonElement[] = ['div', 'button', 'checkbox'];

const DEFAULT_ICON_BUTTON_ELEMENT: TIconButtonElement = 'button';

/**
 * TODO@all: since the IconButton will be the only component that supports a
 *           compact version we will have an extra property in the definitions
 *           for that. Once we have more than this we should definitely try to
 *           extract that to the `applyMargin` and `applyPadding` functions.
 */
const ICON_BUTTON_DEFINITIONS: { [size in TIconButtonSizeToken]: TIconButtonDefinition } = {
    xs: {
        compactSpacing: 50,
        spacing: 75,
        iconSize: 12,
        fontSize: 75,
    },
    sm: {
        compactSpacing: 75,
        spacing: 100,
        iconSize: 16,
        fontSize: 100,
    },
    md: {
        compactSpacing: 100,
        spacing: 125,
        iconSize: 20,
        fontSize: 100,
    },
    lg: {
        compactSpacing: 100,
        spacing: 125,
        iconSize: 28,
        fontSize: 200,
    },
};

export {
    ICON_BUTTON_SIZES,
    ICON_BUTTON_ELEMENTS,
    DEFAULT_ICON_BUTTON_ELEMENT,
    DEFAULT_ICON_BUTTON_SIZE,
    ICON_BUTTON_SIZE_LABELS,
    ICON_BUTTON_DEFINITIONS,
};
