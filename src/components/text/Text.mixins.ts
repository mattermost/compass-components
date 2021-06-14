import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { FONT_TYPE_FAMILIES, FONT_WEIGHT_MAP } from '../../shared/constants';

import {
    DEFAULT_TEXT_ELEMENT,
    DEFAULT_TEXT_MARGIN,
    DEFAULT_TEXT_SIZE,
    DEFAULT_TEXT_WEIGHT,
    TEXT_DEFINITIONS,
    TEXT_ELEMENTS,
} from './Text.constants';
import { PApplyTextColor, PApplyTextMargin, PApplyTextStyles } from './Text.props';

const applyTextStyles = ({
    inheritLineHeight = false,
    element = DEFAULT_TEXT_ELEMENT,
    size = DEFAULT_TEXT_SIZE,
    weight = DEFAULT_TEXT_WEIGHT,
}: PApplyTextStyles): FlattenSimpleInterpolation => {
    // Whenever this component is used with an element that is not supported within the headings throw an error!
    if (!TEXT_ELEMENTS.includes(element)) {
        throw new Error(
            `Compass Components: Text component was used with an unsupported element '${element}'.
            Please provide one from these available options: ${TEXT_ELEMENTS.join(', ')}.`
        );
    }

    const lineHeight = inheritLineHeight ? 'inherit' : `${TEXT_DEFINITIONS[size].lineHeight}px`;

    return css`
        font-family: ${FONT_TYPE_FAMILIES.body};
        font-weight: ${FONT_WEIGHT_MAP[weight]};
        font-size: ${TEXT_DEFINITIONS[size].size}px;
        line-height: ${lineHeight};
    `;
};

const applyTextMargin = ({
    margin = DEFAULT_TEXT_MARGIN,
    size = DEFAULT_TEXT_SIZE,
}: PApplyTextMargin): FlattenSimpleInterpolation => {
    if (margin === 'none') {
        return css`
            margin: 0;
        `;
    }

    let marginValue = `${TEXT_DEFINITIONS[size].margin}px 0`;

    switch (margin) {
        case 'bottom':
            marginValue = `0 0 ${TEXT_DEFINITIONS[size].margin}px`;
            break;
        case 'top':
            marginValue = `${TEXT_DEFINITIONS[size].margin}px 0 0`;
            break;
        default:
    }

    return css`
        margin: ${marginValue};
    `;
};

const applyTextColor = ({ color, theme }: PApplyTextColor): FlattenSimpleInterpolation => css`
    color: ${color && color !== 'inherit' ? theme.text[color] : color};
`;

export { applyTextStyles, applyTextColor, applyTextMargin };
