import type React from 'react';

import type { TChipSizeToken } from './Chip.types';

type PChip = {
    /**
     * text text for the chip
     */
    text: boolean;
    /**
     * text text for the chip
     */
    size: TChipSizeToken;
    /**
     * shows an error state
     * @default false
     */
    destructive?: boolean;
    /**
     * disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * add a supporting visual to the chip
     */
    leadingVisual?: React.ReactElement;
    /**
     * optional trailing icon (usually close icon)
     */
    trailingIcon?: React.ReactElement;
    /**
     * onClick event handler
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * custom className
     */
    className?: string;
};

type PChipRoot = Required<Pick<PChip, 'destructive' | 'disabled' | 'size'>>;

type PChipTextRoot = { withMargin?: boolean };

export type { PChipRoot, PChipTextRoot };

export default PChip;
