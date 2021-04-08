import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { Utils } from '../../utils';

import {
    BODY_SIZES,
    DEFAULT_TYPOGRAPHY_SIZE,
    HEADING_SIZES,
    HEADING_ELEMENTS,
} from './Typography.constants';
import { PTypography } from './Typography.props';
import { TTypographySize, TTypographyType } from './Typography.types';

function generateFontStyleVariations(
    typeSize: TTypographySize,
    fontType: TTypographyType
): FlattenSimpleInterpolation {
    return css`
        &[data-size='${typeSize}'] {
            font-size: var(--${fontType}-font-size-${typeSize});
            line-height: var(--${fontType}-line-height-${typeSize});

            &[data-margin='none'] {
                margin: 0;
            }
            &[data-margin='top'] {
                margin: var(--${fontType}-margin-top-${typeSize}) 0 0;
            }
            &[data-margin='bottom'] {
                margin: 0 0 var(--${fontType}-margin-bottom-${typeSize});
            }
            &[data-margin='both'] {
                margin: var(--${fontType}-margin-top-${typeSize}) 0
                    var(--${fontType}-margin-bottom-${typeSize});
            }
        }
    `;
}

const Typography = styled.p
    .attrs((props: PTypography) => ({
        // it is possible to remap props, so we do not need to pass down the
        // `as` property from styled-components and prevent usage of
        // unsupported HTML tags
        as: props.element,
        'data-size': props.size,
        'data-type': HEADING_ELEMENTS.includes(props.element) ? 'heading' : 'body',
        'data-weight': props.weight,
        'data-margin': props.margin,
        'data-color': props.color,
    }))
    .withConfig({
        shouldForwardProp: Utils.forwardProperties(),
    })<PTypography>`
        // set body type styles (default)
        // - defaults
        font-family: var(--body-font-family);
        font-size: var(--base-font-size);
        font-weight: var(--font-weight-regular);
        line-height: var(--base-line-height);
        margin: var(--body-margin-top-${DEFAULT_TYPOGRAPHY_SIZE}) 0
            var(--body-margin-bottom-${DEFAULT_TYPOGRAPHY_SIZE});

        // - set font syle variations
        ${BODY_SIZES.map((bodySize) => generateFontStyleVariations(bodySize, 'body'))}
        
        color: inherit;

        // - override weight if specified (body only supports regular and bold weights)
        &[data-weight='bold'] {
            font-weight: var(--font-weight-bold);
        }

        // - specify text colors
        &[data-color='primary'] {
            color: var(--primary-text-color);
        }

        &[data-color='secondary'] {
            color: var(--secondary-text-color);
        }

        &[data-color='disabled'] {
            color: var(--disabled-text-color);
        }

        &[data-color='contrast'] {
            color: var(--contrast-text-color);
        }

        &[data-color='accent'] {
            color: var(--accent-text-color);
        }

        // set heading type styles
        &[data-type='heading'] {
            // - default overrides
            font-weight: var(--font-weight-bold);
            margin: var(--heading-margin-top-${DEFAULT_TYPOGRAPHY_SIZE}) 0
                var(--heading-margin-bottom-${DEFAULT_TYPOGRAPHY_SIZE});

            // - headings switch to heading font at size 300
            &[data-size='300'],
            &[data-size='400'],
            &[data-size='500'],
            &[data-size='600'],
            &[data-size='700'],
            &[data-size='800'],
            &[data-size='900'],
            &[data-size='1000'] {
                font-family: var(--heading-font-family);
            }

            // - set font style variations
            ${HEADING_SIZES.map((headingSize) =>
                generateFontStyleVariations(headingSize, 'heading')
            )}

            // - override weight if specified (heading supports all three weights)
            &[data-weight='light'] {
                font-weight: var(--font-weight-light);
            }
            &[data-weight='regular'] {
                font-weight: var(--font-weight-regular);
            }
        }

        // animation
        body.enable-animations & {
            transition: color var(--animation-speed-shortest) 0s ease-in-out;
        }
`;

export default Typography;
