import { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { TSpacingDefinition, parseSpacing } from '../spacing';

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
