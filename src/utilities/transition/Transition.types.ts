import type { TransitionStatus } from 'react-transition-group';
import type { FlattenSimpleInterpolation } from 'styled-components';

import { TThemeAnimationSpeed } from '../theme';

type TTransitionType = 'fade' | 'scale';

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
