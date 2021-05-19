import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { Utils } from '../../shared';

import { SHAPE_ELEVATION_DEFINITIONS } from './Shape.constants';
import { PApplyElevation, PApplyShape } from './Shape.props';
import { TShapeVariant } from './Shape.types';

/**
 * apply a shape to a given element without the use of an additional wrapping Shape component.
 *
 * @param {(number|string)?} width
 * @param {(number|string)?} height
 * @param {TShapeBorderRadius} radius
 * @returns {FlattenSimpleInterpolation}
 */
function applyShape({ width, height, radius }: PApplyShape): FlattenSimpleInterpolation {
    // define the variant by checking for string
    const variant: TShapeVariant = Utils.isString(radius) ? radius : 'rectangle';

    // the circle variant has to have numerical width set for it to work
    if (variant === 'circle' && !Utils.isNumber(width)) {
        throw new TypeError(
            'applyShape: When choosing `circle` as value for `radius` the width needs to be of type `number`'
        );
    }

    const RADII: Partial<Record<TShapeVariant, string>> = {
        rectangle: `${radius}px`,
        circle: '50%',
        pill: '1000px',
    };

    // checking for width >= 0 is not necesary here, since we might have the
    // possibility of "hidden" shapes (with width = 0 and height = 0)
    if (variant === 'circle' && width) {
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

/**
 * Apply elevation styles to a styled component.
 * When the elevationOnHover is not the same as the elevation value
 * it will create hover styles as well.
 *
 * @param {number} elevation
 * @param {number} elevationOnHover
 * @param {boolean} useDark
 * @returns {FlattenSimpleInterpolation}
 */
function applyElevation(
    { elevation, elevationOnHover = elevation }: PApplyElevation,
    useDark: boolean
): FlattenSimpleInterpolation {
    if (elevation === 0 && elevationOnHover === 0) {
        // elevation of 0 has no depth and therefore we do not set any values
        return css``;
    }

    const { y, blur: b } = SHAPE_ELEVATION_DEFINITIONS[elevation];
    const alpha = useDark ? 0.32 : 0.08;

    if (elevation !== elevationOnHover) {
        const { y: yHover, blur: bHover } = SHAPE_ELEVATION_DEFINITIONS[elevationOnHover];

        return css`
            box-shadow: 0 ${y}px ${b}px rgba(0, 0, 0, ${alpha});
            &:hover {
                box-shadow: 0 ${yHover}px ${bHover}px rgba(0, 0, 0, ${alpha});
            }
        `;
    }

    return css`
        box-shadow: 0 ${y}px ${b}px rgba(0, 0, 0, ${alpha});
    `;
}

export { applyShape, applyElevation };
