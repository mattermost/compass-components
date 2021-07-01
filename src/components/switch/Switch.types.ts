import { TTextSizeToken } from '../text';

type TSwitchSizeToken = 'sm' | 'md' | 'lg';

type TSwitchHeight = 16 | 24 | 32;

type TSwitchWidth = 26 | 40 | 52;

type TSwitchInnerWidth = 12 | 20 | 26;

type TSwitchDefinition = {
    width: TSwitchWidth;
    height: TSwitchHeight;
    innerWidth: TSwitchInnerWidth;
    labelSize: TTextSizeToken;
};

export type { TSwitchSizeToken, TSwitchDefinition, TSwitchWidth, TSwitchHeight, TSwitchInnerWidth };
