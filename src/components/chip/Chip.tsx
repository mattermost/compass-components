import React from 'react';

import Icon from '../../foundations/icon';
import Shape from '../../foundations/shape';
import type PShape from '../../foundations/shape/Shape.props';
import { Utils } from '../../shared';
import Grid from '../../utilities/grid';
import Spacing from '../../utilities/spacing';

import { CHIP_DEFINITIONS, DEFAULT_CHIP_SIZE } from './Chip.constants';
import type PChip from './Chip.props';
import ChipLabelRoot from './Chip.root';

const Chip: React.FC<PChip> = (props: PChip) => {
    const { size = DEFAULT_CHIP_SIZE, avatar, icon, onDelete, ...rest } = props;

    const { padding, avatarSize, iconSize, iconBgSize, textSize } = CHIP_DEFINITIONS[size];
    const avatarElement = React.isValidElement(avatar)
        ? React.cloneElement(avatar, { size: avatarSize, disableHover: true })
        : null;
    const iconElement = Utils.isString(icon) ? (
        <Grid<PShape>
            element={Shape}
            radius={'circle'}
            width={iconBgSize}
            backgroundColor={'rgba(0,0,0,0.2)'}
            placeContent={'center'}
            placeItems={'center'}
        >
            <Icon size={iconSize} glyph={icon} color={'primary'} />
        </Grid>
    ) : null;

    return (
        <Grid<PShape>
            columnsTemplate={'auto auto auto'}
            element={Shape}
            placeItems={'center'}
            placeContent={'center'}
            padding={Spacing.all(padding)}
            radius={'pill'}
            {...rest}
        >
            {avatarElement || iconElement}
            <ChipLabelRoot
                element={'span'}
                size={textSize}
                weight={'bold'}
                hasLeadingElement={Boolean(avatarElement || iconElement)}
            >
                {'Leonard Riley'}
            </ChipLabelRoot>
            {Utils.isFunction(onDelete) && (
                <Icon size={iconSize} color={'info'} glyph={'close-circle'} />
            )}
        </Grid>
    );
};

export default Chip;
