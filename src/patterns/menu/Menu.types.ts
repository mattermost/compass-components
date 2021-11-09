import Placement from '../../utilities/popover';
import type { MutableRefObject, ReactElement } from 'react';

import MenuItem from '../../components/menu-item';
import type { TSpacingToken as TMenuOffsetToken } from '../../utilities/spacing';

type TMenuOffset = [TMenuOffsetToken, TMenuOffsetToken];

type TMenuGroup = {
    menuItems: typeof MenuItem[];
    title?: string;
};

type TMenuTrigger = {
    element: ReactElement;
    ref: MutableRefObject<HTMLElement>;
};

export type {
    TMenuGroup,
    TMenuTrigger,
    TMenuOffset,
    Placement as TMenuPlacement,
    TMenuOffsetToken,
};
