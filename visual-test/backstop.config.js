'use strict';

const kebabCase = require('lodash.kebabcase');

const storybookConfig = require('./storybook-scenarios');

const THREE_SECONDS_IN_MS = 1000;
const scenarios = [];
const viewports = [];

function pushViewport(viewport, width, height) {
    viewports.push({
        name: viewport,
        width,
        height,
    });
}

storybookConfig.storyScenarios.map((scenario) =>
    scenarios.push({
        label: kebabCase(scenario.label),
        url: `${storybookConfig.baseUrl}${scenario.relativeUrl}`,
        delay: THREE_SECONDS_IN_MS,
        requireSameDimensions: false,
        selectors: ['#testWrapper'],
    })
);

storybookConfig.viewports.forEach((viewport) => {
    switch (true) {
        case viewport === 'phone':
            pushViewport(viewport, 320, 480);
            break;
        case viewport === 'tablet':
            pushViewport(viewport, 1024, 768);
            break;
        case viewport === 'desktop':
        default:
            pushViewport(viewport, 1280, 1024);
    }
});

// disbling since the naming convention does not always work in 3rd party tools
/* eslint-disable camelcase */
module.exports = {
    id: storybookConfig.projectId,
    viewports,
    scenarios,
    onReadyScript: 'onReady.js',
    onBeforeScript: 'onBefore.js',
    paths: {
        bitmaps_reference: 'visual-test/backstop_data/bitmaps_reference',
        bitmaps_test: 'visual-test/backstop_data/bitmaps_test',
        html_report: 'visual-test/backstop_data/html_report',
        engine_scripts: 'visual-test/backstop_data/engine_scripts',
    },
    report: ['browser'],
    engine: 'puppeteer',
    engineOptions: {
        args: ['--no-sandbox'],
        dumpio: false,
    },
    asyncCaptureLimit: 10,
    asyncCompareLimit: 100,
    delay: 500,
    debug: false,
    fileNameTemplate: 'VRT_{scenarioIndex}_{scenarioLabel}_{viewportLabel}',
};
/* eslint-enable camelcase */
