type TElevationLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type TElevationDefinition = {
    offsetY: number;
    blurRadius: number;
};

type TElevationDefinitions = {
    [key in TElevationLevel]: TElevationDefinition;
};

export type { TElevationLevel, TElevationDefinition, TElevationDefinitions };
