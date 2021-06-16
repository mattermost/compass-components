import { TIconSize } from '../icon';
import { TTextSizeToken } from '../text';

type TTextInputSizeToken = 'sm' | 'md' | 'lg';

type TTextInputHeight = 32 | 40 | 48;

type TTextInput = {
    spacing: TSpacingToken;
    iconSize: TIconSize;
    height: TTextInputHeight;
    labelSize: TTextSizeToken;
};

export type { TTextInputSizeToken, TTextInput };
