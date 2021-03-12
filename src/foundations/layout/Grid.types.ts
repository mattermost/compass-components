type TSpacingTokens = 0 | 25 | 50 | 75 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500;

type TSpacingSides = 'top' | 'right' | 'bottom' | 'left';

type TSpacingTokensTRBL = {
    [key in TSpacingSides]?: TSpacingTokens;
};

type TSpacing = {
    spacing: (TSpacingTokens | null)[];
    all: (spacingToken: TSpacingTokens) => TSpacing;
    trbl: (spacingTokensTRBL: TSpacingTokensTRBL) => TSpacing;
    only: (side: TSpacingSides, spacingToken: TSpacingTokens) => TSpacing;
    vertical: (spacingToken: TSpacingTokens) => TSpacing;
    horizontal: (spacingToken: TSpacingTokens) => TSpacing;
    parseSpacing: () => string;
};

export type { TSpacing, TSpacingSides, TSpacingTokens, TSpacingTokensTRBL };
