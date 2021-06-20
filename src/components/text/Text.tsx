import {
    DEFAULT_TEXT_COLOR,
    DEFAULT_TEXT_ELEMENT,
    DEFAULT_TEXT_MARGIN,
    DEFAULT_TEXT_SIZE,
    DEFAULT_TEXT_WEIGHT,
    TEXT_ELEMENTS,
} from './Text.constants';
import PText from './Text.props';
import TextRoot from './Text.root';

const Text = ({
    inheritLineHeight = false,
    color = DEFAULT_TEXT_COLOR,
    element = DEFAULT_TEXT_ELEMENT,
    margin = DEFAULT_TEXT_MARGIN,
    size = DEFAULT_TEXT_SIZE,
    weight = DEFAULT_TEXT_WEIGHT,
    ...rest
}: PText): JSX.Element => {
    // Whenever this component is used with an element that is not supported within the headings throw an error!
    if (!TEXT_ELEMENTS.includes(element)) {
        throw new Error(
            `Compass Components: Text component was used with an unsupported element '${element}'.
            Please provide one from these available options: ${TEXT_ELEMENTS.join(', ')}.`
        );
    }

    const rootProperties = {
        inheritLineHeight,
        color,
        margin,
        size,
        weight,
        ...rest,
    };

    return <TextRoot as={element} {...rootProperties} />;
};

export default Text;
