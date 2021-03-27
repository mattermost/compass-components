import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import {
    DEFAULT_HEADING_ELEMENT_SIZES,
    DEFAULT_HEADING_SIZE,
    HEADING_ELEMENTS,
    THeadingElement,
} from '../../../components/heading';
import { DEFAULT_TEXT_SIZE } from '../../../components/text';

const generateDefaultHeadingStyles = (): FlattenSimpleInterpolation =>
    HEADING_ELEMENTS.map(
        (headingElement: THeadingElement) => css`
            ${headingElement} {
                font-size: var(
                    --heading-font-size-${DEFAULT_HEADING_ELEMENT_SIZES[headingElement]}
                );
                line-height: var(
                    --heading-line-height-${DEFAULT_HEADING_ELEMENT_SIZES[headingElement]}
                );
                margin: var(--body-margin-top-${DEFAULT_HEADING_ELEMENT_SIZES[headingElement]}) 0
                    var(--body-margin-bottom-${DEFAULT_HEADING_ELEMENT_SIZES[headingElement]});
            }
        `
    );

const VDefaultStyles = css`
    p,
    span,
    label {
        // set body type styles
        // - defaults
        font-family: var(--body-font-family);
        font-size: var(--body-font-size-${DEFAULT_TEXT_SIZE});
        font-weight: var(--font-weight-regular);
        line-height: var(--body-line-height-${DEFAULT_TEXT_SIZE});
    }

    p,
    label {
        // set body type styles
        // - defaults
        margin: var(--body-margin-top-${DEFAULT_TEXT_SIZE}) 0
            var(--body-margin-bottom-${DEFAULT_TEXT_SIZE});
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        // set heading type styles
        // - defaults
        font-family: var(--heading-font-family, Metropolis, Arial, sans-serif);
        font-weight: var(--font-weight-bold, bold);
        margin: var(--heading-margin-top-${DEFAULT_HEADING_SIZE}) 0
            var(--heading-margin-bottom-${DEFAULT_HEADING_SIZE});
    }

    ${generateDefaultHeadingStyles()}
`;

export default VDefaultStyles;
