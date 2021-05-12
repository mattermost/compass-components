import {
    TSpacing,
    TSpacingDefinition,
    TSpacingSides,
    TSpacingToken,
    TSpacingTokensSymmetric,
    TSpacingTokensTRBL,
} from './Grid.types';

const GridSpacing: TSpacing = {
    all(spacingToken: TSpacingToken): TSpacingDefinition {
        return [spacingToken, spacingToken, spacingToken, spacingToken];
    },
    trbl({ top = 0, right = 0, bottom = 0, left = 0 }: TSpacingTokensTRBL): TSpacingDefinition {
        return [top, right, bottom, left];
    },
    only(side: TSpacingSides, spacingToken: TSpacingToken): TSpacingDefinition {
        const trblDefinition: TSpacingTokensTRBL = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };

        trblDefinition[side] = spacingToken;

        return this.trbl(trblDefinition);
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
    spacing.map((s = 0) => `var(--size-${s || 0})`).join(' ');

export { parseSpacing };

export default GridSpacing;
