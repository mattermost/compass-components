import { TSpacing, TSpacingSides, TSpacingTokens, TSpacingTokensTRBL } from './Grid.types';

const GridSpacing = (): TSpacing => ({
    spacing: new Array(4).fill(null),
    all(spacingToken: TSpacingTokens): TSpacing {
        this.spacing.fill(spacingToken);

        return this;
    },
    trbl({ top = 0, right = 0, bottom = 0, left = 0 }: TSpacingTokensTRBL): TSpacing {
        this.spacing[0] = top;
        this.spacing[1] = right;
        this.spacing[2] = bottom;
        this.spacing[3] = left;

        return this;
    },
    only(side: TSpacingSides, spacingToken: TSpacingTokens): TSpacing {
        let index = 0;

        switch (side) {
            case 'right':
                index = 1;
                break;
            case 'bottom':
                index = 2;
                break;
            case 'left':
                index = 3;
                break;
            case 'top':
            default:
                index = 0;
        }

        this.spacing[index] = spacingToken;

        return this;
    },
    vertical(spacingToken: TSpacingTokens): TSpacing {
        this.spacing[0] = spacingToken;
        this.spacing[2] = spacingToken;

        return this;
    },
    horizontal(spacingToken: TSpacingTokens): TSpacing {
        this.spacing[1] = spacingToken;
        this.spacing[3] = spacingToken;

        return this;
    },
    parseSpacing(): string {
        const spacingString = this.spacing.map((s = 0) => `var(--size-${s || 0})`).join(' ');

        this.spacing = new Array(4).fill(null);

        return spacingString;
    },
});

export default GridSpacing;
