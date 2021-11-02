'use strict';

const kebabCase = require('lodash.kebabcase');

const { stories } = require('./stories.json');

const projectId = 'Visual testing';
const baseUrl = 'http://host.docker.internal:6006/';
const storybookIds = Object.keys(stories);

const isDocumentationOnly = (story) => story.parameters.docsOnly;

const storyScenarios = storybookIds
    .map((storyKey) =>
        isDocumentationOnly(stories[storyKey])
            ? null
            : {
                  relativeUrl: `iframe.html?id=${stories[storyKey].id}&viewMode=story`,
                  label: stories[storyKey].name,
                  kind: stories[storyKey].kind,
              }
    )
    .filter(Boolean);

// viewports are: phone (320px X 480px), tablet (1024px X 768px), and desktop (1280px X 1024px).
const viewports = ['desktop'];

module.exports = {
    baseUrl,
    projectId,
    storyScenarios,
    viewports,
};
