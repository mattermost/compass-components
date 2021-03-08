import { addParameters } from '@storybook/react';

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
    options: {
        storySort: (a, b) => {
            if (a[0].toLocaleLowerCase().includes('overview')) return -1;
            if (b[0].toLocaleLowerCase().includes('overview')) return 1;
            return 0;
        },
    },
});
