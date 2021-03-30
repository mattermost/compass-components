/* eslint-disable no-console,no-process-exit,import/no-extraneous-dependencies,node/no-unpublished-require */
'use strict';

const path = require('path');

const fse = require('fs-extra');
const glob = require('glob');
const docgen = require('react-docgen-typescript');

const rootPath = process.cwd();
const documentationPath = path.join(rootPath, './src/.docs');
const documentationSourcePath = path.join(rootPath, './src');

const tsConfigParser = docgen.withCustomConfig(`${process.cwd()}/tsconfig.json`, {
    savePropValueAsString: true,
    skipChildrenPropWithoutDoc: true,
    shouldExtractValuesFromUnion: true,
    shouldExtractLiteralValuesFromEnum: true,
    propFilter: (property) => {
        if (property.declarations && Array.isArray(property.declarations)) {
            const filterPropertyFromDocumentation =
                // filter out all properties without a description
                property.description &&
                // do not save properties that are data-attributes
                // (those get generated from styled components `.attrs()` method)
                !property.name.startsWith('data-') &&
                // do not save properties that are aria-attributes
                // (those get generated from styled components `.attrs()` method)
                !property.name.startsWith('aria-') &&
                // do not save properties that are derived from HTMLAttributes type
                property.declarations.find(
                    (declaration) => !declaration.fileName.includes('node_modules')
                );

            return Boolean(filterPropertyFromDocumentation);
        }

        return true;
    },
});

const directories = ['foundations', 'components'];
const jsonData = {};

function createDocumentation() {
    directories.forEach((directory) => {
        console.log(' ');
        console.log(path.join(documentationSourcePath, directory));
        console.log(' ');

        jsonData[directory] = [];

        const files = glob.sync('**/*.tsx', { cwd: path.join(documentationSourcePath, directory) });

        files.forEach(async (file) => {
            console.log(`--> file: ${file}`);

            /** @type {[]} */
            const parserResults = await tsConfigParser.parse(
                path.join(documentationSourcePath, directory, file)
            );

            const componentInfo = { ...parserResults[0] };

            componentInfo.filename = `./src/${directory}/${file}`;

            Object.keys(componentInfo.props).forEach((key) => {
                if (!componentInfo.props[key] || componentInfo.props[key].required) {
                    return;
                }

                if (componentInfo.props[key].type.raw) {
                    componentInfo.props[key].type.raw = componentInfo.props[key].type.raw.replace(
                        ' | undefined',
                        ''
                    );
                }

                if (componentInfo.props[key].type.value) {
                    componentInfo.props[key].type.value = componentInfo.props[
                        key
                    ].type.value.filter(({ value }) => value !== 'undefined');
                }
            });

            jsonData[directory].push(componentInfo);
        });
    });
}

const writeDocumentationFiles = () => {
    console.log(' ');

    const cmds = directories.map(async (directory) => {
        await fse.writeFile(
            path.join(documentationPath, `${directory}.json`),
            JSON.stringify(jsonData[directory], null, 2),
            'utf8'
        );

        console.log(
            `Created component info in "${path.join(documentationPath, `${directory}.json`)}"`
        );
        console.log(' ');
    });

    return Promise.all(cmds);
};

async function run() {
    try {
        await createDocumentation();

        await writeDocumentationFiles();
    } catch (error) {
        console.error(error);

        process.exit(1);
    }
}

run();
