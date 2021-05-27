import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { FONT_TYPE_FAMILIES, FONT_WEIGHT_MAP } from '../../shared/constants';

import {
    DEFAULT_HEADING_ELEMENT,
    DEFAULT_HEADING_SIZE,
    DEFAULT_HEADING_WEIGHT,
    HEADING_DEFINITIONS,
    HEADING_ELEMENTS,
} from './Heading.constants';
import { PApplyHeadingColor, PApplyHeadingMargin, PApplyHeadingStyles } from './Heading.props';

const applyHeadingStyles = ({
    inheritLineHeight = false,
    element = DEFAULT_HEADING_ELEMENT,
    size = DEFAULT_HEADING_SIZE,
    weight = DEFAULT_HEADING_WEIGHT,
}: PApplyHeadingStyles): FlattenSimpleInterpolation => {
    // Whenever this component is used with an element that is not supported within the headings throw an error!
    if (!HEADING_ELEMENTS.includes(element)) {
        throw new Error(
            `Compass Components: Heading component was used with an unsupported element '${element}'.
            Please provide one from these available options: ${HEADING_ELEMENTS.join(', ')}.`
        );
    }

    const lineHeight = inheritLineHeight ? 'inherit' : `${HEADING_DEFINITIONS[size].lineHeight}px`;

    return css`
        font-family: ${FONT_TYPE_FAMILIES.body};
        font-weight: ${FONT_WEIGHT_MAP[weight]};
        font-size: ${HEADING_DEFINITIONS[size].size}px;
        line-height: ${lineHeight};
    `;
};

const applyHeadingMargin = ({ margin, size }: PApplyHeadingMargin): FlattenSimpleInterpolation => {
    let marginValue = `${HEADING_DEFINITIONS[size].marginTop}px 0 ${HEADING_DEFINITIONS[size].marginBottom}px`;

    switch (margin) {
        case 'none':
            marginValue = '0';
            break;
        case 'bottom':
            marginValue = `0 0 ${HEADING_DEFINITIONS[size].marginBottom}px`;
            break;
        case 'top':
            marginValue = `${HEADING_DEFINITIONS[size].marginTop}px 0 0`;
            break;
        default:
    }

    return css`
        margin: ${marginValue};
    `;
};

const applyHeadingColor = ({ color, theme }: PApplyHeadingColor): FlattenSimpleInterpolation => css`
    color: ${color && color !== 'inherit' ? theme.text[color] : color};
`;

export { applyHeadingStyles, applyHeadingColor, applyHeadingMargin };
