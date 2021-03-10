import { addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { withThemes } from 'storybook-addon-themes/react';

addDecorator(withThemes);

import lightTheme from '../src/foundations/theme-provider/light-theme';
import darkTheme from '../src/foundations/theme-provider/dark-theme';
import { CanvasThemeProvider } from '../src/foundations/theme-provider/theme-provider';

const themes = [
    {
        name: 'light',
        class: 'compass-light',
        color: lightTheme.background,
        definition: lightTheme,
        default: true,
    },
    { name: 'dark', class: 'compass-dark', color: darkTheme.background, definition: darkTheme },
];

const CustomDecorator = (props) => (
    <CanvasThemeProvider theme={props.theme.definition} children={props.children} />
);

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
        disable: true,
    },
    themes: {
        list: themes,
        clearable: false,
        Decorator: CustomDecorator,
    },
});

addDecorator(withA11y);
