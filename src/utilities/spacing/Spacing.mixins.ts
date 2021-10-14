import { css } from 'styled-components';
import type { FlattenSimpleInterpolation } from 'styled-components';

import { TSpacingDefinition } from './Spacing.types';
import { parseSpacing } from './Spacing';

function applyPadding(spacing: TSpacingDefinition): FlattenSimpleInterpolation {
    return css`
        padding: ${parseSpacing(spacing)};
    `;
}

function applyMargin(spacing: TSpacingDefinition): FlattenSimpleInterpolation {
    return css`
        margin: ${parseSpacing(spacing)};
    `;
}

export { applyPadding, applyMargin };
