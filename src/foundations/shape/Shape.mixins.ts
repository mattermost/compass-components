import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { Utils } from '../../shared';

import { DEFAULT_SHAPE_BORDER_RADIUS, SHAPE_BORDER_RADII } from './Shape.constants';
import { PApplyShape } from './Shape.props';
import { TShapeVariant } from './Shape.types';

/**
 * apply a shape to a given element without the use of an additional wrapping Shape component.
 *
 * @param {(number|string)?} width
 * @param {(number|string)?} height
 * @param {TShapeBorderRadius} radius
 * @returns {FlattenSimpleInterpolation}
 */
export function applyShape({
    width,
    height,
    radius = DEFAULT_SHAPE_BORDER_RADIUS,
}: PApplyShape): FlattenSimpleInterpolation {
    // define the variant by checking for string
    const variant: TShapeVariant = Utils.isString(radius) ? radius : 'rectangle';

    if (variant === 'circle') {
        // the circle variant has to have numerical width set for it to work
        Utils.assert(
            Utils.isNumber(width),
            'applyShape: When choosing `circle` as value for `radius` the width needs to be of type `number`'
        );
    }

    // check if the value for border-radius is in the pre-defined range
    Utils.assert(
        SHAPE_BORDER_RADII.includes(radius),
        `applyShape: Please provide a \`radius\` value that meets the requirement. Valid options are: ${SHAPE_BORDER_RADII.join(
            ', '
        )}.`
    );

    const RADII: Partial<Record<TShapeVariant, string>> = {
        rectangle: `${radius}px`,
        circle: '50%',
        pill: '1000px',
    };

    // checking for width >= 0 is necesary here, since we might have the
    // possibility of "hidden" shapes (with width = 0 and height = 0)
    if (variant === 'circle' && Utils.isNumber(width) && width >= 0) {
        return css`
            border-radius: ${RADII[variant]};
            width: ${Utils.getPxValue(width)};
            height: ${Utils.getPxValue(width)};
        `;
    }

    return css`
        border-radius: ${RADII[variant]};
        width: ${width ? Utils.getPxValue(width) : null};
        height: ${height ? Utils.getPxValue(height) : null};
    `;
}

export default applyShape;
