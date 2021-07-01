import { TSpacingToken } from '../../utilities/spacing';
import { TTextSizeToken } from '../text';
import { TIconSize } from '../../foundations/icon';

type TTextInputSizeToken = 'sm' | 'md' | 'lg';

type TTextInputHeight = 32 | 40 | 48;

type TTextInput = {
    spacing: TSpacingToken;
    iconSize: TIconSize;
    height: TTextInputHeight;
    labelSize: TTextSizeToken;
    labelMargin: TSpacingToken;
};

export type { TTextInputSizeToken, TTextInput };
