'use strict';

const fs = require('fs');

const prompts = require('prompts');
const kebabCase = require('lodash.kebabcase');
const upperFirst = require('lodash.upperfirst');

const {
    component,
    base,
    constants,
    types,
    props,
    story,
    barrel,
} = require('./component-templates.js');

const writeFileErrorHandler = (error) => {
    if (error) {
        throw error;
    }
};

const createFiles = (name, group = 'components') => {
    if (!name) {
        throw new Error('You must include a component name.');
    }

    const directory = `./src/${group}/${kebabCase(name)}/`;

    // throw an error if the file already exists
    if (fs.existsSync(directory)) {
        throw new Error('A component with that name already exists.');
    }

    // create the folder
    fs.mkdirSync(directory);

    // component.stories.tsx
    fs.writeFile(`${directory}/${name}.stories.mdx`, story(name), writeFileErrorHandler);
    // component.props.tsx
    fs.writeFile(`${directory}/${name}.props.ts`, props(name), writeFileErrorHandler);
    // component.types.tsx
    fs.writeFile(`${directory}/${name}.types.ts`, types(name), writeFileErrorHandler);
    // component.constants.tsx
    fs.writeFile(`${directory}/${name}.constants.ts`, constants(name), writeFileErrorHandler);
    // component.base.tsx
    fs.writeFile(`${directory}/${name}.base.tsx`, base(name), writeFileErrorHandler);
    // component.tsx
    fs.writeFile(`${directory}/${name}.tsx`, component(name), writeFileErrorHandler);
    // index.tsx
    fs.writeFile(`${directory}/index.ts`, barrel(name), writeFileErrorHandler);
};

(async () => {
    const response = await prompts([
        {
            type: 'select',
            name: 'group',
            message: 'Pick the area the component belongs to:',
            choices: [
                {
                    title: 'Foundation',
                    description: 'the foundational parts of the compass design system',
                    value: 'foundations',
                },
                {
                    title: 'Component',
                    description: 'a Component build from the foundations',
                    value: 'components',
                },
                {
                    title: 'Pattern',
                    description: 'a complex structure built from the components',
                    value: 'patterns',
                    disabled: true,
                },
            ],
            initial: 0,
        },
        {
            type: 'text',
            name: 'name',
            message: 'Pick a name for your new component: ',
        },
    ]);

    const { name, group } = response;

    createFiles(upperFirst(name), group);
})();
