import React from 'react';

import { Utils } from '../../shared';

import {
    DEFAULT_TEXT_COLOR,
    DEFAULT_TEXT_ELEMENT,
    DEFAULT_TEXT_MARGIN,
    DEFAULT_TEXT_SIZE,
    DEFAULT_TEXT_WEIGHT,
    TEXT_COLORS,
    TEXT_ELEMENTS,
    TEXT_MARGINS,
    TEXT_SIZES,
    TEXT_WEIGHTS,
} from './Text.constants';
import type PText from './Text.props';
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
    Utils.assert(
        TEXT_ELEMENTS.includes(element) || React.isValidElement(element),
        `Text: component was used with an unsupported element '${element}'.
            Please provide one from these available options: ${TEXT_ELEMENTS.join(
                ', '
            )}, or a valid \`ReactElement\``,
        true
    );

    Utils.assert(
        TEXT_COLORS.includes(color) || Utils.isColor(color),
        `Text: component was used with an unsupported color '${color}'.
            Please provide one from these available options: ${TEXT_WEIGHTS.join(
                ', '
            )}, or a valid CSS color value`,
        true
    );

    Utils.assert(
        TEXT_SIZES.includes(size),
        `Text: component was used with an unsupported size '${size}'.
            Please provide one from these available options: ${TEXT_SIZES.join(', ')}.`,
        true
    );

    Utils.assert(
        TEXT_MARGINS.includes(margin),
        `Text: component was used with an unsupported margin '${margin}'.
            Please provide one from these available options: ${TEXT_MARGINS.join(', ')}.`,
        true
    );

    Utils.assert(
        TEXT_WEIGHTS.includes(weight),
        `Text: component was used with an unsupported weight '${weight}'.
            Please provide one from these available options: ${TEXT_WEIGHTS.join(', ')}.`,
        true
    );

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
