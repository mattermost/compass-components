import { css } from 'styled-components';
import type { FlattenSimpleInterpolation } from 'styled-components';

import { ELEVATION_DEFINITIONS } from './Elevation.constants';
import type PElevation from './Elevation.props';

/**
 * Apply elevation styles to a styled component.
 * When the elevationOnHover is not the same as the elevation value
 * it will create hover styles as well.
 *
 * @param {number} elevation
 * @param {number} elevationOnHover
 * @param {boolean} darkTheme
 * @returns {FlattenSimpleInterpolation}
 */
function applyElevation(
    { elevation = 0, elevationOnHover = elevation }: PElevation,
    darkTheme: boolean
): FlattenSimpleInterpolation | null {
    if (elevation === 0 && elevationOnHover === 0) {
        return null;
    }

    const { offsetY, blurRadius } = ELEVATION_DEFINITIONS[elevation];
    const opacity = darkTheme ? 0.32 : 0.08;

    if (elevation !== elevationOnHover) {
        const { offsetY: hoverOffsetY, blurRadius: hoverBlurRadius } =
            ELEVATION_DEFINITIONS[elevationOnHover];

        return css`
            box-shadow: 0 ${offsetY}px ${blurRadius}px rgba(0, 0, 0, ${opacity});
            z-index: ${elevation || 0};

            &:hover {
                box-shadow: 0 ${hoverOffsetY}px ${hoverBlurRadius}px rgba(0, 0, 0, ${opacity});
            }
        `;
    }

    return css`
        box-shadow: 0 ${offsetY}px ${blurRadius}px rgba(0, 0, 0, ${opacity});
        z-index: ${elevation || 0};
    `;
}

export default applyElevation;
