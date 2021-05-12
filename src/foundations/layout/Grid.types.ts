import { TContainerElement } from '../../shared/types';

type TGridAlignment = 'initial' | 'flex-start' | 'center' | 'flex-end' | 'stretch';

type TGridJustify =
    | 'initial'
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

type TGridFlex = number | 'auto' | 'initial';

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
    | 500;

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
    TContainerElement as TGridComponent,
    TGridAlignment,
    TGridJustify,
    TGridFlex,
    TSpacing,
    TSpacingSides,
    TSpacingToken,
    TSpacingTokensTRBL,
    TSpacingDefinition,
    TSpacingTokensSymmetric,
};
