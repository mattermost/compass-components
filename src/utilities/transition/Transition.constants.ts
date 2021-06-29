import { css } from 'styled-components';

import { TThemeAnimationSpeed } from '../theme';

import { TTransitionType, TTransitionTypeStatusMap } from './Transition.types';

const TRANSITION_SPEEDS: TThemeAnimationSpeed[] = ['fastest', 'fast', 'normal', 'slow', 'slowest'];

const DEFAULT_TRANSITION_SPEED: TThemeAnimationSpeed = 'normal';

const TRANSITION_TYPE_PROPERTY_MAP: Record<TTransitionType, string> = {
    fade: 'opacity',
    scale: 'transform',
};

const TRANSITION_TYPE_DEFINITIONS: TTransitionTypeStatusMap = {
    fade: {
        entering: css`
            opacity: 1;
        `,
        entered: css`
            opacity: 1;
        `,
        exiting: css`
            opacity: 0;
        `,
        exited: css`
            opacity: 0;
        `,
        unmounted: css`
            opacity: 0;
        `,
    },
    scale: {
        entering: css`
            transform: scale(1);
        `,
        entered: css`
            transform: scale(1);
        `,
        exiting: css`
            transform: scale(0.5);
        `,
        exited: css`
            transform: scale(0.5);
        `,
        unmounted: css`
            transform: scale(0.5);
        `,
    },
};

export {
    TRANSITION_SPEEDS,
    DEFAULT_TRANSITION_SPEED,
    TRANSITION_TYPE_PROPERTY_MAP,
    TRANSITION_TYPE_DEFINITIONS,
};
