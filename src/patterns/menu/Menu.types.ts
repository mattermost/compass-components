import type { Placement } from '@popperjs/core';
import type { MutableRefObject } from 'react';
import type React from 'react';

import type MenuItem from '../../components/menu-item';
import type { TSpacingToken as TMenuOffsetToken } from '../../utilities/spacing';

type TMenuOffset = [TMenuOffsetToken, TMenuOffsetToken];

type TMenuGroup = {
    menuItems: typeof MenuItem[];
    title?: string;
};

type TMenuTrigger = {
    element: React.ReactElement;
    ref: MutableRefObject<null>;
};

export type {
    TMenuGroup,
    TMenuTrigger,
    TMenuOffset,
    Placement as TMenuPlacement,
    TMenuOffsetToken,
};
