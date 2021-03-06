type TSpacingToken =
    | 0
    | 25
    | 50
    | 75
    | 100
    | 125
    | 150
    | 175
    | 200
    | 250
    | 300
    | 350
    | 400
    | 450
    | 500
    | 600
    | 700
    | 800;

type TSpacingSides = 'top' | 'right' | 'bottom' | 'left';

type TSpacingSymmetricSides = 'vertical' | 'horizontal';

type TSpacingTokensTRBL = {
    [key in TSpacingSides]?: TSpacingToken;
};

type TSpacingTokensSymmetric = {
    [key in TSpacingSymmetricSides]?: TSpacingToken;
};

// defining all entries in this Tuple restricts the length to 4
type TSpacingDefinition = [
    TSpacingToken | null,
    TSpacingToken | null,
    TSpacingToken | null,
    TSpacingToken | null
];

type TSpacing = {
    all: (spacingToken: TSpacingToken) => TSpacingDefinition;
    trbl: (spacingTokensTRBL: TSpacingTokensTRBL) => TSpacingDefinition;
    only: (side: TSpacingSides, spacingToken: TSpacingToken) => TSpacingDefinition;
    symmetric: (spacingTokensSymmetric: TSpacingTokensSymmetric) => TSpacingDefinition;
};

export type {
    TSpacing,
    TSpacingSides,
    TSpacingToken,
    TSpacingTokensTRBL,
    TSpacingDefinition,
    TSpacingTokensSymmetric,
};
