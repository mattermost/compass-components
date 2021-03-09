import kebabCase from 'lodash.kebabcase';

const isColor = (colorString: string): boolean => {
    const s = new Option().style;

    s.color = colorString;

    return s.color === colorString;
};

const getStoryDocumentationUrl = (storyParameters: Record<string, string>): string => {
    const storyPathParts = storyParameters.title.split('/');
    const storyPath = storyPathParts.map(part => kebabCase(part)).join('-');

    if (storyParameters.includeStories.length === 0) {
        return `/?path=/docs/${storyPath}--page`;
    }

    return `/?path=/docs/${storyPath}--${kebabCase(storyParameters.includeStories[0])}`;
};

const Utils = {
    isColor,
    getStoryDocumentationUrl,
};

export default Utils;
