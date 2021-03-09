import { addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
    dependencies: {
        // display only dependencies/dependents that have a story in storybook
        // by default this is false
        withStoriesOnly: true,

        // completely hide a dependency/dependents block if it has no elements
        // by default this is false
        hideEmpty: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    options: {
        storySort: (a, b) => {
            if (a[0].toLocaleLowerCase().includes('overview')) return -1;
            if (b[0].toLocaleLowerCase().includes('overview')) return 1;
            return 0;
        },
    },
    backgrounds: {
        grid: {
            cellSize: 4,
            opacity: 0.2,
            cellAmount: 16,
        },
    },
});

addDecorator(withA11y);
