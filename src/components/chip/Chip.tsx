import React from 'react';

import Grid from '../../utilities/layout';
import Spacing from '../../utilities/spacing';

import { DEFAULT_CHIP_SIZE } from './Chip.constants';
import type PChip from './Chip.props';
import ChipRoot, { ChipTextRoot } from './Chip.root';

const Chip = ({
    text,
    size = DEFAULT_CHIP_SIZE,
    destructive = false,
    disabled = false,
    leadingVisual,
    trailingIcon,
}: PChip): JSX.Element => {
    const rootProperties = {
        size,
        destructive,
        disabled,
    };

    return (
        <ChipRoot {...rootProperties}>
            {leadingVisual}
            <Grid
                flex={1}
                row
                alignItems={'initial'}
                padding={Spacing.only('left', leadingVisual ? 125 : 0)}
            >
                <ChipTextRoot>{text}</ChipTextRoot>
            </Grid>
            {trailingIcon && trailingIcon}
        </ChipRoot>
    );
};

export default Chip;
