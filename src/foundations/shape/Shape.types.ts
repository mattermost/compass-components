type TShapeElement = 'div' | 'span' | 'section' | 'aside' | 'button';

type TShapeBorderRadius = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 'circle' | 'pill';

type TShapeElevationLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type TShapeElevationDefinition = {
    y: number;
    blur: number;
};

type TShapeElevationDefinitions = {
    [key in TShapeElevationLevel]: TShapeElevationDefinition;
};

export type {
    TShapeElement,
    TShapeBorderRadius,
    TShapeElevationLevel,
    TShapeElevationDefinition,
    TShapeElevationDefinitions,
};
