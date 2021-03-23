import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { Utils } from '../../utils';

import { BODY_SIZES, DEFAULT_TYPE_SIZE, HEADING_SIZES, HEADING_VARIANTS } from './Type.constants';
import { PType } from './Type.props';
import { TTypeSize, TTypeType } from './Type.types';

function generateFontSize(typeSize: TTypeSize, fontType: TTypeType): FlattenSimpleInterpolation {
    return css`
        &[data-size='${typeSize}'] {
            font-size: var(--${fontType}-font-size-${typeSize});
            line-height: var(--${fontType}-line-height-${typeSize});
        }
    `;
}

function generateMargins(typeSize: TTypeSize, fontType: TTypeType): FlattenSimpleInterpolation {
    return css`
        &[data-gutter='none'] {
            margin: 0;
        }
        &[data-gutter='top'] {
            margin: var(--${fontType}-margin-top-${typeSize}) 0 0;
        }
        &[data-gutter='bottom'] {
            margin: 0 0 var(--${fontType}-margin-bottom-${typeSize});
        }
        &[data-gutter='both'] {
            margin: var(--${fontType}-margin-top-${typeSize}) 0
                var(--${fontType}-margin-bottom-${typeSize});
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
        'data-gutter': props.gutter,
        'data-color': props.color || 'primary',
    }))
    .withConfig({
        shouldForwardProp: Utils.doNotForwardProperties([
            'size',
            'type',
            'weight',
            'variant',
            'gutter',
        ]),
    })<PType>`
        // set default styles
        font-family: var(--body-font-family);
        font-size: var(--base-font-size);
        font-weight: var(--font-weight-bold);
        line-height: var(--base-line-height);

        // set body font-sizes
        ${BODY_SIZES.map((bodySize) => generateFontSize(bodySize, 'body'))}

        // - override weight if specified (body only supports regular and bold)
        &[data-weight='bold'] {
            font-weight: var(--font-weight-bold);
        }

        // specify text colors
        &[data-color='primary'] {
            color: var(--primary-text-color);
        }

        &[data-color='secondary'] {
            color: var(--secondary-text-color);
        }

        &[data-color='disabled'] {
            color: var(--disabled-text-color);
        }

        // set body-gutters
        ${BODY_SIZES.map((bodySize) => generateMargins(bodySize, 'body'))}

        // set heading styles
        &[data-type='heading'] {
            font-weight: var(--font-weight-bold);

            ${HEADING_SIZES.map((headingSize) => generateFontSize(headingSize, 'heading'))}

            // - headings switch to heading font at size 300
            &[data-size='300'],
            &[data-size='400'],
            &[data-size='500'],
            &[data-size='600'],
            &[data-size='700'],
            &[data-size='1000'] {
                font-family: var(--heading-font-family);
            }

            // - override weight if specified (heading supports all three weights)
            &[data-weight='light'] {
                font-weight: var(--font-weight-light);
            }
            &[data-weight='regular'] {
                font-weight: var(--font-weight-regular);
            }

            // set heading-gutters
            ${HEADING_SIZES.map((headingSize) => generateMargins(headingSize, 'heading'))}
        }

        // animation
        body.enable-animations & {
            transition: color var(--animation-speed-shortest) 0s ease-in-out;
        }
`;

export default Type;
