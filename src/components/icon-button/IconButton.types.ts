import { TIconSize } from '../../foundations/icon';
import { TSpacingToken } from '../../utilities/spacing';
import { TComponentSizeToken } from '../../shared';
import { TTextSizeToken } from '../text';

type TIconButtonDefinition = {
    compactSpacing: TSpacingToken;
    spacing: TSpacingToken;
    iconSize: TIconSize;
    fontSize: TTextSizeToken;
};

type TIconButtonElement = 'div' | 'button' | 'checkbox';

type TIconButtonSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xl' | 'xxl' | 'xxxl'>;

export type { TIconButtonDefinition, TIconButtonElement, TIconButtonSizeToken };
