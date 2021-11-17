import { css } from 'styled-components';

import { POPOVER_OFFSET_TOKENS, POPOVER_PLACEMENTS } from '../../utilities/popover';

import type { TMenuPlacement } from './Menu.types';

const DEFAULT_MENU_PLACEMENT: TMenuPlacement = 'bottom';

const MENU_TRANSITIONS_MAP = {
    mainMenu: {
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
    subMenu: {
        properties: ['transform'],
        entering: css`
            transform: translate3d(0, 0, 0);
        `,
        entered: css`
            transform: translate3d(0, 0, 0);
        `,
        exiting: css`
            transform: translate3d(100%, 0, 0);
        `,
        exited: css`
            transform: translate3d(100%, 0, 0);
        `,
        unmounted: css`
            transform: translate3d(100%, 0, 0);
        `,
    },
};

export {
    POPOVER_OFFSET_TOKENS as MENU_OFFSET_TOKENS,
    POPOVER_PLACEMENTS as MENU_PLACEMENTS,
    DEFAULT_MENU_PLACEMENT,
    MENU_TRANSITIONS_MAP,
};
