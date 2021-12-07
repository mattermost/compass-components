import type { TIconSizeToken } from '../../foundations/icon';
import type { TComponentSizeToken } from '../../shared';
import type { TSpacingToken } from '../../utilities/spacing';
import type { TAvatarSizeToken } from '../avatar';
import type { TTextSizeToken } from '../text';

type TChipNumber = number;

type TChipSizeToken = Exclude<TComponentSizeToken, 'xxxs' | 'xxs' | 'xs' | 'xl' | 'xxl' | 'xxxl'>;

type TChipDefinition = {
    padding: TSpacingToken;
    textSize: TTextSizeToken;
    iconSize: TIconSizeToken;
    iconBgSize: number;
    avatarSize: TAvatarSizeToken;
};

type TChipDefinitionMap = {
    [size in TChipSizeToken]: TChipDefinition;
};

export type { TChipNumber, TChipSizeToken, TChipDefinitionMap };
