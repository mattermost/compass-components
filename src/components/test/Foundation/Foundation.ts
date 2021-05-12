import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { TVariant } from './Foundation.types';
import { PShape, PLayout, PElevation } from './Foundation.props';
import { ELEVATIONS } from './Foundation.constants';

function applyShape({ width, height, variant, radius }: PShape): FlattenSimpleInterpolation {
    const RADII: Partial<Record<TVariant, string>> = {
        rectangle: '0px',
        circle: '50%',
        pill: '1000px',
        'rounded-rectangle': `${radius}px`,
    };

    return css`
        align-items: center;
        border-radius: ${RADII[variant]};
        display: flex;
        height: ${height || null};
        justify-content: center;
        width: ${width || null};
    `;
}

function applyPadding({ spacing = 0, sides = 'none' }: PLayout): FlattenSimpleInterpolation {
    if (sides === 'none') {
        return css``;
    }

    let padding = '';

    switch (sides) {
        case 'horizontal':
            padding = `padding: 0 ${spacing}px;`;
            break;
        case 'vertical':
            padding = `padding: ${spacing}px 0;`;
            break;
        case 'all':
            padding = `padding: ${spacing}px;`;
            break;
        default:
            padding = `padding-${sides}: ${spacing}px;`;
    }

    return css`
        ${padding}
    `;
}

function applyElevation({ elevation = 1 }: PElevation): FlattenSimpleInterpolation {
    const { xOffset: x, yOffset: y, blur: b, alpha: a } = ELEVATIONS[elevation - 1];

    return css`
        box-shadow: ${x}px ${y}px ${b}px rgba(0, 0, 0, ${a});
    `;
}

export { applyShape, applyPadding, applyElevation };
