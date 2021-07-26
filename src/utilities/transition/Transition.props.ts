import { ReactNode, ReactNodeArray } from 'react';
import { TransitionStatus } from 'react-transition-group';

import { TTheme } from '../theme';

import { TTransitionSpeed, TTransitionType, TTransitionTypeDefinition } from './Transition.types';

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
     * provide a string or array of strings with default transitions
     * @default []
     */
    type?: TTransitionType | TTransitionType[];
    /**
     * pass in the animationSpeedToken to define the duration of the transition
     * define a animationSpeedToken for the transition. Durations are taken
     * from the provided theme to be consistent.
     *
     * Can be defined as single animationSpeedToken entering and exiting
     * animation, or as an object containing separate values for `in` and `out`
     * @default 'normal'
     */
    speed?: TTransitionSpeed | { in?: TTransitionSpeed; out?: TTransitionSpeed };
    /**
     * define a delay for the transition. Can be defined as number in
     * milliseconds for entering and exiting animation, or as an object
     * containing separate values for `in` and `out` in milliseconds
     * @default 0
     */
    delay?: number | { in?: number; out?: number };
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
     * defiune a custom transition to be used with the Transition component.
     * It needs to follow the structure defined for transitions to work properly
     */
    customTransition?: TTransitionTypeDefinition;
    /**
     * a callback that gets fired when the transition ends
     */
    onTransitionEnd?: () => void;
    /**
     * Callback fired before the "entering" status is applied. An extra
     * parameter isAppearing is supplied to indicate if the enter stage is
     * occurring on the initial mount
     */
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    /**
     * Callback fired after the "entering" status is applied. An extra
     * parameter isAppearing is supplied to indicate if the enter stage is
     * occurring on the initial mount
     */
    onEntering?: (node: HTMLElement, isAppearing: boolean) => void;
    /**
     * Callback fired after the "entered" status is applied. An extra
     * parameter isAppearing is supplied to indicate if the enter stage is
     * occurring on the initial mount
     */
    onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
    /**
     * Callback fired before the "exiting" status is applied.
     */
    onExit?: (node: HTMLElement) => void;
    /**
     * Callback fired after the "exiting" status is applied.
     */
    onExiting?: (node: HTMLElement) => void;
    /**
     * Callback fired after the "exited" status is applied.
     */
    onExited?: (node: HTMLElement) => void;
    /**
     * By default the child component is mounted immediately along with the
     * parent Transition component. If you want to "lazy mount" the component on
     * the first `in={true}` you can set `mountOnEnter`. After the first enter
     * transition the component will stay mounted, even on `exited`, unless you
     * also specify `unmountOnExit`.
     *
     * @default false
     */
    mountOnEnter?: boolean;
    /**
     * By default the child component stays mounted after it reaches the
     * `exited` state. Set `unmountOnExit` if you'd prefer to unmount the
     * component after it finishes exiting.
     *
     * @default false
     */
    unmountOnExit?: boolean;
};

type PAnimation = {
    types: TTransitionType[];
    state: TransitionStatus;
    duration: number;
    delay?: number;
    customTransition?: TTransitionTypeDefinition;
};

export type { PAnimation };

export default PTransition;
