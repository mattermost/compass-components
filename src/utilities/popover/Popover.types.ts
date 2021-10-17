import type { Placement } from '@popperjs/core';

import type { TSpacingToken as TPopoverOffsetToken } from '../spacing';

type TPopoverOffset = [TPopoverOffsetToken, TPopoverOffsetToken];

export type { TPopoverOffset, Placement as TPopoverPlacement, TPopoverOffsetToken };
