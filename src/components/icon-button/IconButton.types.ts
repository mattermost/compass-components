import { TSpacingToken } from '../../foundations/layout';
import { TComponentSizeToken } from '../../shared';
import { TIconSize } from '../icon';
import { TTextSizeToken } from '../text';

type TIconButtonDefinition = {
    spacing: TSpacingToken;
    iconSize: TIconSize;
    fontSize: TTextSizeToken;
};

type TIconButtonElement = 'div' | 'button' | 'checkbox';

type TIconButtonSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xxl' | 'xxxl'>;

export type { TIconButtonDefinition, TIconButtonElement, TIconButtonSizeToken };
