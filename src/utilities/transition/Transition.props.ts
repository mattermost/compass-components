import { ReactNode, ReactNodeArray } from 'react';
import { TransitionStatus } from 'react-transition-group';

import { TTheme } from '../theme';

import { TTransitionSpeed, TTransitionType } from './Transition.types';

type PTransition = {
    /**
     * show the component with transition
     */
    isVisible: boolean;
    /**
     * children to render the transition with
     */
    children: ReactNode | ReactNodeArray;
    /**
     * the theme passed in to the transition
     */
    theme: TTheme;
    /**
     * either provide a string or array of strings with default transitions
     */
    type: TTransitionType | TTransitionType[];
    /**
     * pass in the animationSpeedToken to define the duration of the transition
     * @default 'normal'
     */
    speed?: TTransitionSpeed;
    /**
     * Enable or disable enter transitions.
     * @default true
     */
    enter?: boolean;
    /**
     * Enable or disable exit transitions.
     * @default true
     */
    exit?: boolean;
    /**
     * a callback that gets fired when the transition ends
     */
    onTransitionEnd?: () => void;
    /**
     * Callback fired before the "entering" status is applied. An extra
     * parameter isAppearing is supplied to indicate if the enter stage is
     * occurring on the initial mount
     * @default function noop() {}
     */
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    /**
     * Callback fired after the "entering" status is applied. An extra
     * parameter isAppearing is supplied to indicate if the enter stage is
     * occurring on the initial mount
     * @default function noop() {}
     */
    onEntering?: (node: HTMLElement, isAppearing: boolean) => void;
    /**
     * Callback fired after the "entered" status is applied. An extra
     * parameter isAppearing is supplied to indicate if the enter stage is
     * occurring on the initial mount
     * @default function noop() {}
     */
    onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
    /**
     * Callback fired before the "exiting" status is applied.
     * @default function noop() {}
     */
    onExit?: (node: HTMLElement) => void;
    /**
     * Callback fired after the "exiting" status is applied.
     * @default function noop() {}
     */
    onExiting?: (node: HTMLElement) => void;
    /**
     * Callback fired after the "exited" status is applied.
     * @default function noop() {}
     */
    onExited?: (node: HTMLElement) => void;
};

type PAnimation = {
    types: TTransitionType[];
    state: TransitionStatus;
    duration: string;
};

export type { PAnimation };

export default PTransition;
