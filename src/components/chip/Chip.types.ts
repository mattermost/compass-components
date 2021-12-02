import type { TIconSize } from '../../foundations/icon';
import type { TTextSizeToken } from '../text';
import type { TTextInputSizeToken } from '../text-input';

type TChipHeight = 32 | 40 | 46;

type TChipDefinition = {
    iconSize: TIconSize;
    textSize: TTextSizeToken;
    height: TChipHeight;
};

export type { TChipHeight, TTextInputSizeToken as TChipSizeToken, TChipDefinition };
