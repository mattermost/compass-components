import { css } from 'styled-components';
import type { FlattenSimpleInterpolation } from 'styled-components';

import { FONT_TYPE_FAMILIES, FONT_WEIGHT_MAP, Utils } from '../../shared';

import {
    DEFAULT_TEXT_MARGIN,
    DEFAULT_TEXT_SIZE,
    DEFAULT_TEXT_WEIGHT,
    TEXT_DEFINITIONS,
} from './Text.constants';
import type { PApplyTextColor, PApplyTextMargin, PApplyTextStyles } from './Text.props';

const applyTextStyles = ({
    inheritLineHeight = false,
    size = DEFAULT_TEXT_SIZE,
    weight = DEFAULT_TEXT_WEIGHT,
    textTransform = '',
}: PApplyTextStyles): FlattenSimpleInterpolation => {
    const lineHeight = inheritLineHeight ? 'inherit' : `${TEXT_DEFINITIONS[size].lineHeight}px`;
    const transform = textTransform.length > 0 ? textTransform : 'none';

    return css`
        font-family: ${FONT_TYPE_FAMILIES.body};
        font-weight: ${FONT_WEIGHT_MAP[weight]};
        font-size: ${TEXT_DEFINITIONS[size].size}px;
        line-height: ${lineHeight};
        text-transform: ${transform};
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

const applyTextColor = ({ color, theme }: PApplyTextColor): FlattenSimpleInterpolation => {
    if (color === 'inherit') {
        return css`
            color: inherit;
        `;
    }

    if (Utils.isColor(color)) {
        return css`
            color: ${color};
        `;
    }

    return css`
        color: ${theme?.text[color] || 'inherit'};
    `;
};

export { applyTextStyles, applyTextColor, applyTextMargin };
