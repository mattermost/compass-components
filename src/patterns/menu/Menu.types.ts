import type { ReactNode } from 'react';

import type { TPopoverPlacement } from '../../utilities/popover';
import type { TSpacingToken as TMenuOffsetToken } from '../../utilities/spacing';

type TMenuOffset = [TMenuOffsetToken, TMenuOffsetToken];

type TMenuGroup = {
    menuItems: ReactNode | ReactNode[];
    title?: string;
};

export type { TMenuOffset, TMenuGroup, TPopoverPlacement as TMenuPlacement, TMenuOffsetToken };
