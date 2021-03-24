import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { Utils } from '../../utils';

import { BODY_SIZES, DEFAULT_TYPE_SIZE, HEADING_SIZES, HEADING_VARIANTS } from './Type.constants';
import { PType } from './Type.props';
import { TTypeSize, TTypeType } from './Type.types';

function generateFontStyleVariations(
    typeSize: TTypeSize,
    fontType: TTypeType
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

const Type = styled.p
    .attrs((props: PType) => ({
        // it is possible to remap props, so we do not need to pass down the
        // `as` property from styled-components and prevent usage of
        // unsupported HTML tags
        as: props.variant,
        'data-size': props.size || DEFAULT_TYPE_SIZE,
        'data-type': HEADING_VARIANTS.includes(props.variant) ? 'heading' : 'body',
        'data-weight': props.weight,
        'data-margin': props.margin,
        'data-color': props.color || 'primary',
    }))
    .withConfig({
        shouldForwardProp: Utils.doNotForwardProperties([
            'size',
            'type',
            'weight',
            'variant',
            'margin',
        ]),
    })<PType>`
        // set body type styles (default)
        // - defaults
        font-family: var(--body-font-family);
        font-size: var(--base-font-size);
        font-weight: var(--font-weight-regular);
        line-height: var(--base-line-height);
        margin: var(--body-margin-top-${DEFAULT_TYPE_SIZE}) 0
            var(--body-margin-bottom-${DEFAULT_TYPE_SIZE});

        // - set font syle variations
        ${BODY_SIZES.map((bodySize) => generateFontStyleVariations(bodySize, 'body'))}

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

        // set heading type styles
        &[data-type='heading'] {
            // - default overrides
            font-weight: var(--font-weight-bold);
            margin: var(--heading-margin-top-${DEFAULT_TYPE_SIZE}) 0
                var(--heading-margin-bottom-${DEFAULT_TYPE_SIZE});

            // - headings switch to heading font at size 300
            &[data-size='300'],
            &[data-size='400'],
            &[data-size='500'],
            &[data-size='600'],
            &[data-size='700'],
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

export default Type;
