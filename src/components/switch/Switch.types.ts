type TSwitchSizeToken = 'sm' | 'md' | 'lg';

type TSwitchHeight = 16 | 24 | 32;

type TSwitchWidth = 26 | 40 | 52;

type TSwitchInnerWidth = 12 | 20 | 26;

type TSwitchDimentions = {
    width: TSwitchWidth;
    height: TSwitchHeight;
    innerWidth: TSwitchInnerWidth;
};

export type { TSwitchSizeToken, TSwitchHeight, TSwitchWidth, TSwitchInnerWidth, TSwitchDimentions };
