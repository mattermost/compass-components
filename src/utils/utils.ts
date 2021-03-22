import kebabCase from 'lodash.kebabcase';
import styled from 'styled-components';

import PShape from '../foundations/shape/Shape.props';

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

/**
 * this is to prevent all properties to be passed down to the underlying
 * component, except for the ones we want to pass down
 * (e.g. `type="button"`)
 *
 * `data-*` and `aria-*` attributes are always passed done
 *
 * It is to be used in the styled components `shouldForwardProp` config
 *
 * @example
 * ```typescript
 * const StyledDiv = styled.div.withConfig({
 *   shouldForwardProp: Utils.doNotForwardProperties(['width', 'height']),
 * })<PShape>` ... `
 * ```
 */
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
