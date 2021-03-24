import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { DEFAULT_HEADING_SIZEMAP } from '../../../components/heading';
import { DEFAULT_TEXT_SIZE } from '../../../components/text';
import { HEADING_ELEMENTS, TTypographyHeadingElement } from '../../typography';

const generateDefaultHeadingStyles = (): FlattenSimpleInterpolation =>
    HEADING_ELEMENTS.map(
        (headingLevel: TTypographyHeadingElement) => css`
            ${headingLevel} {
                font-size: var(--heading-font-size-${DEFAULT_HEADING_SIZEMAP[headingLevel]});
                line-height: var(--heading-line-height-${DEFAULT_HEADING_SIZEMAP[headingLevel]});
                margin: var(--body-margin-top-${DEFAULT_HEADING_SIZEMAP[headingLevel]}) 0
                    var(--body-margin-bottom-${DEFAULT_HEADING_SIZEMAP[headingLevel]});
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
    }

    ${generateDefaultHeadingStyles()}
`;

export default VDefaultStyles;
