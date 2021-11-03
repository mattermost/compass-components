import type { TransitionStatus } from 'react-transition-group';
import type { FlattenSimpleInterpolation } from 'styled-components';

import type { TThemeAnimationSpeed } from '../theme';

type TTransitionType = 'fade' | 'scale' | 'slideUp';

type TTransitionTypeDefinition = {
    [key in TransitionStatus]: FlattenSimpleInterpolation;
} & { properties: string[] };

type TTransitionTypeStatusMap = {
    [key in TTransitionType]: TTransitionTypeDefinition;
} & { custom?: TTransitionTypeDefinition };

export type {
    TTransitionType,
    TTransitionTypeStatusMap,
    TTransitionTypeDefinition,
    TThemeAnimationSpeed as TTransitionSpeed,
};
