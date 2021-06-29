import { TransitionStatus } from 'react-transition-group';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { TThemeAnimationSpeed } from '../theme';

type TTransitionType = 'fade' | 'scale';

type TTransitionTypeDefinition = {
    [key in TransitionStatus]: FlattenSimpleInterpolation;
};

type TTransitionTypeStatusMap = {
    [key in TTransitionType]: TTransitionTypeDefinition;
};

export type { TTransitionType, TTransitionTypeStatusMap, TThemeAnimationSpeed as TTransitionSpeed };
