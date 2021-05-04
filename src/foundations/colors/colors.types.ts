type TBaseColorShade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;

type TExtendedColorShade =
    | 0
    | 50
    | 100
    | 150
    | 200
    | 250
    | 300
    | 350
    | 400
    | 450
    | 500
    | 550
    | 600
    | 650
    | 700
    | 750
    | 800
    | 850
    | 900
    | 950
    | 1000
    | 1050
    | 1100
    | 1150
    | 1200
    | 1250;

type TBaseColor = {
    readonly [key in TBaseColorShade]: string;
};

type TExtendedColor = {
    readonly [key in TBaseColorShade]: string;
};

export type { TBaseColor, TBaseColorShade, TExtendedColor, TExtendedColorShade };
