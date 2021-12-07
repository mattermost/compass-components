import type { TSpacingToken } from '../../utilities/spacing';
import type { TTextSizeToken } from '../text';
import type { TIconSizeToken } from '../../foundations/icon';

type TTextInputSizeToken = 'sm' | 'md' | 'lg';

type TTextInputHeight = 32 | 40 | 48;

type TTextInput = {
    spacing: TSpacingToken;
    iconSize: TIconSizeToken;
    height: TTextInputHeight;
    labelSize: TTextSizeToken;
    labelMargin: TSpacingToken;
};

export type { TTextInputSizeToken, TTextInput };
