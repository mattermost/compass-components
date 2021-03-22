import kebabCase from 'lodash.kebabcase';

const isColor = (colorString: string): boolean => {
    const s = new Option().style;

    s.color = colorString;

    return s.color === colorString;
};

const getStoryDocumentationUrl = (storyParameters: Record<string, string>): string => {
    const storyPathParts = storyParameters.title.split('/');
    const storyPath = storyPathParts.map((part) => kebabCase(part)).join('-');

    if (storyParameters.includeStories.length === 0) {
        return `/?path=/docs/${storyPath}--page`;
    }

    return `/?path=/docs/${storyPath}--${kebabCase(storyParameters.includeStories[0])}`;
};

const doNotForwardProperties = (blacklist: string[]): ((property: string | number) => boolean) => (
    property: string | number
): boolean =>
    // forward the property when it is a `data-*`attribute
    property.toString().startsWith('data-') ||
    // forward the property when it is a `aria-*`attribute
    property.toString().startsWith('aria-') ||
    // forward the property when it is not defined within the property-blacklist
    !blacklist.includes(property.toString());

const Utils = {
    isColor,
    getStoryDocumentationUrl,
    doNotForwardProperties,
};

export default Utils;
