import type { Placement } from '@popperjs/core';
import type { MutableRefObject, ReactElement } from 'react';

import type MenuItem from '../../components/menu-item';
import type { TSpacingToken as TMenuOffsetToken } from '../../utilities/spacing';

type TMenuOffset = [TMenuOffsetToken, TMenuOffsetToken];

type TMenuGroup = {
    menuItems: MenuItem[];
    title?: string;
};

type TMenuTrigger = {
    element: ReactElement;
    ref: MutableRefObject<null>;
};

export type {
    TMenuGroup,
    TMenuTrigger,
    TMenuOffset,
    Placement as TMenuPlacement,
    TMenuOffsetToken,
};
