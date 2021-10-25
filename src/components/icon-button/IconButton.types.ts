import type { TIconSize } from '../../foundations/icon';
import type { TSpacingToken } from '../../utilities/spacing';
import type { TComponentSizeToken } from '../../shared';
import type { TTextSizeToken } from '../text';

type TIconButtonDefinition = {
    compactSpacing: TSpacingToken;
    spacing: TSpacingToken;
    iconSize: TIconSize;
    fontSize: TTextSizeToken;
};

type TIconButtonElement = 'div' | 'button' | 'checkbox';

type TIconButtonSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xl' | 'xxl' | 'xxxl'>;

export type { TIconButtonDefinition, TIconButtonElement, TIconButtonSizeToken };
