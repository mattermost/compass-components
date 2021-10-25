import type { TIconSize } from '../../foundations/icon';
import type { TComponentSizeToken } from '../../shared';
import type { TSpacingTokensSymmetric } from '../../utilities/spacing';
import type { TTextSizeToken } from '../text';

type TButtonSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xl' | 'xxl' | 'xxxl'>;

type TButtonWidth = number | 'full' | 'auto';

type TButtonVariant = 'primary' | 'secondary' | 'tertiary';

type TButtonIconPosition = 'start' | 'end';

type TButtonDefinition = {
    spacing: TSpacingTokensSymmetric;
    labelSize: TTextSizeToken;
    iconSize: TIconSize;
    iconMargin: number;
    height: number;
};

export type {
    TButtonVariant,
    TButtonSizeToken,
    TButtonWidth,
    TButtonIconPosition,
    TButtonDefinition,
};
