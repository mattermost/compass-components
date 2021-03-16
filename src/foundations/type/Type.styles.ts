import styled from 'styled-components';

import {
    TYPE_SIZES,
    BASE_FONT_SIZE,
    BASE_LINE_HEIGHT,
    BODY_FONT_SIZES,
    BODY_LINE_HEIGHTS,
    HEADING_FONT_SIZES,
    HEADING_LINE_HEIGHTS,
} from './Type.constants';
import { TTypeSize } from './Type.types';
import { PStyledType } from './Type.props';

function generateFontSize(
    typeSize: TTypeSize,
    fontSizes: Record<TTypeSize, number>,
    lineHeights: Record<TTypeSize, number>
): string {
    return `
&[data-size='${typeSize}'] {
    font-size: ${fontSizes[typeSize]}px;
    line-height: ${lineHeights[typeSize]}px;
}
`;
}

const StyledType = styled.p<PStyledType>`
    // variables (would be defined in global styles)
    --body-font-family: 'Open Sans', sans-serif;
    --heading-font-family: Metropolis, sans-serif;
    --base-font-size: ${BASE_FONT_SIZE}px;
    --base-line-height: ${BASE_LINE_HEIGHT}px;
    --light-font-weight: 300;
    --regular-font-weight: 400;
    --bold-font-weight: 600;

    // Set the default styles
    font-family: var(--body-font-family);
    font-size: var(--base-font-size);
    font-weight: var(--regular-font-weight);
    line-height: var(--base-line-height);

    // set body styles
    ${TYPE_SIZES.map((bodySize) => generateFontSize(bodySize, BODY_FONT_SIZES, BODY_LINE_HEIGHTS))}
    // - override weight if specified
    &[data-weight='bold'] {
        font-weight: var(--bold-font-weight);
    }

    // set heading styles
    &[data-type='heading'] {
        font-weight: var(--bold-font-weight);

        ${TYPE_SIZES.map((headingSize) =>
            generateFontSize(headingSize, HEADING_FONT_SIZES, HEADING_LINE_HEIGHTS)
        )}

        // - headings switch to heading font at size 300
        &[data-size='300'],
        &[data-size='400'],
        &[data-size='500'],
        &[data-size='600'],
        &[data-size='700'],
        &[data-size='1000'] {
            font-family: var(--heading-font-family);
        }

        // - override weight if specified
        &[data-weight='light'] {
            font-weight: var(--light-font-weight);
        }
        &[data-weight='regular'] {
            font-weight: var(--regular-font-weight);
        }
    }
`;

export default StyledType;
