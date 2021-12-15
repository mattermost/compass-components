import type { TIconSizeToken } from '../../foundations/icon';
import type { TSpacingToken } from '../../utilities/spacing';
import type { TComponentSizeToken } from '../../shared';
import type { TTextSizeToken } from '../text';

type TIconButtonDefinition = {
    width: number;
    compactSpacing: TSpacingToken;
    spacing: TSpacingToken;
    iconSize: TIconSizeToken;
    fontSize: TTextSizeToken;
};

type TIconButtonElement = 'div' | 'button' | 'checkbox';

type TIconButtonSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xl' | 'xxl' | 'xxxl'>;

export type { TIconButtonDefinition, TIconButtonElement, TIconButtonSizeToken };
