import { Placement } from '@popperjs/core';

import { TSpacingToken as TPopoverOffsetToken } from '../spacing';

type TPopoverOffset = [TPopoverOffsetToken, TPopoverOffsetToken];

export type { TPopoverOffset, Placement as TPopoverPlacement, TPopoverOffsetToken };
