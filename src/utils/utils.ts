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

const defaultWhitelist: string[] = ['role', 'type', 'children', 'className'];

/**
 * this is to prevent all properties to be passed down to the underlying
 * component, except for the ones we want to. (e.g. `type="button"`)
 * Leave the whitelist empty or do not pass a value to block all properties,
 * except for the default ones.
 *
 * `data-*` and `aria-*` attributes are always passed down.
 *
 * It is to be used in the styled components `shouldForwardProp` config
 *
 * @example
 * ```typescript
 * // pass down `width` and `height` properties
 * const StyledDiv = styled.div.withConfig({
 *   shouldForwardProp: Utils.forwardProperties(['width', 'height']),
 * })<PDiv>` ... `
 *
 * // block all properties from being passed down
 * const StyledSection = styled.section.withConfig({
 *   shouldForwardProp: Utils.forwardProperties(),
 * })<PSection>` ... `
 * ```
 * */
const forwardProperties = (whitelist: string[] = []): ((property: string | number) => boolean) => (
    property: string | number
): boolean =>
    // forward the property when it is a `data-*`attribute
    property.toString().startsWith('data-') ||
    // forward the property when it is a `aria-*`attribute
    property.toString().startsWith('aria-') ||
    // always forward the property when it is defined within the property-whitelist
    defaultWhitelist.includes(property.toString()) ||
    // forward the property when it is defined within the passed property-whitelist
    whitelist.includes(property.toString());

const Utils = {
    isColor,
    getStoryDocumentationUrl,
    forwardProperties,
};

export default Utils;
