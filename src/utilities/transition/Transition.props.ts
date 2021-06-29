import { ReactNode, ReactNodeArray } from 'react';
import { TransitionStatus } from 'react-transition-group';

import { TTheme } from '../theme';

import { TTransitionSpeed, TTransitionType } from './Transition.types';

type PTransition = {
    isVisible: boolean;
    children: ReactNode | ReactNodeArray;
    theme: TTheme;
    type: TTransitionType | TTransitionType[];
    speed?: TTransitionSpeed;
    onTransitionEnd?: () => void;
};

type PAnimation = {
    types: TTransitionType[];
    state: TransitionStatus;
    duration: string;
};

export type { PAnimation };

export default PTransition;
