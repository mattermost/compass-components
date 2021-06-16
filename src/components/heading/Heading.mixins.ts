import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { FONT_TYPE_FAMILIES, FONT_WEIGHT_MAP } from '../../shared';

import { HEADING_DEFINITIONS } from './Heading.constants';
import { PApplyHeadingColor, PApplyHeadingMargin, PApplyHeadingStyles } from './Heading.props';

const applyHeadingStyles = ({
    inheritLineHeight,
    size,
    weight,
}: PApplyHeadingStyles): FlattenSimpleInterpolation => css`
    font-family: ${FONT_TYPE_FAMILIES.heading};
    ${weight
        ? css`
              font-weight: ${FONT_WEIGHT_MAP[weight]};
          `
        : null};
    ${size
        ? css`
              font-size: ${HEADING_DEFINITIONS[size].size}px;
              line-height: ${inheritLineHeight
                  ? 'inherit'
                  : `${HEADING_DEFINITIONS[size].lineHeight}px`};
          `
        : null};
`;

const applyHeadingMargin = ({
    margin,
    size,
}: PApplyHeadingMargin): FlattenSimpleInterpolation | null => {
    if (!margin || !size) {
        return null;
    }

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
