import { css } from 'styled-components';

import type { TThemeAnimationSpeed } from '../theme';

import type { TTransitionTypeStatusMap } from './Transition.types';

const TRANSITION_SPEEDS: TThemeAnimationSpeed[] = [
    'instant',
    'fastest',
    'fast',
    'normal',
    'slow',
    'slowest',
];

const DEFAULT_TRANSITION_SPEED: TThemeAnimationSpeed = 'normal';

const TRANSITION_TYPE_DEFINITIONS: TTransitionTypeStatusMap = {
    fade: {
        properties: ['opacity'],
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
        properties: ['transform'],
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
            transform: scale(1);
        `,
    },
    slideUp: {
        properties: ['transform'],
        entering: css`
            transform: translate3d(0, 0, 0);
        `,
        entered: css`
            transform: translate3d(0, 0, 0);
        `,
        exiting: css`
            transform: translate3d(0, 150%, 0);
        `,
        exited: css`
            transform: translate3d(0, 150%, 0);
        `,
        unmounted: css`
            transform: translate3d(0, 150%, 0);
        `,
    },
};

export { TRANSITION_SPEEDS, DEFAULT_TRANSITION_SPEED, TRANSITION_TYPE_DEFINITIONS };
