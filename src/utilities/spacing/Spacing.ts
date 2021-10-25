import { Utils } from '../../shared';

import type {
    TSpacing,
    TSpacingDefinition,
    TSpacingSides,
    TSpacingToken,
    TSpacingTokensSymmetric,
    TSpacingTokensTRBL,
} from './Spacing.types';
import { SIZES } from './Spacing.constants';

const Spacing: TSpacing = {
    all(spacingToken: TSpacingToken): TSpacingDefinition {
        return [spacingToken, spacingToken, spacingToken, spacingToken];
    },
    trbl({ top = 0, right = 0, bottom = 0, left = 0 }: TSpacingTokensTRBL): TSpacingDefinition {
        return [top, right, bottom, left];
    },
    only(side: TSpacingSides, spacingToken: TSpacingToken): TSpacingDefinition {
        const trbl: TSpacingTokensTRBL = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };

        trbl[side] = spacingToken;

        return this.trbl(trbl);
    },
    symmetric({ vertical = 0, horizontal = 0 }: TSpacingTokensSymmetric): TSpacingDefinition {
        return this.trbl({
            top: vertical,
            right: horizontal,
            bottom: vertical,
            left: horizontal,
        });
    },
};

const parseSpacing = (spacing: TSpacingDefinition): string =>
    spacing.map((s) => (s ? Utils.getPxValue(SIZES[s]) : 0)).join(' ');

export { parseSpacing };

export default Spacing;
