import React from 'react';

import Shape from '../../foundations/shape';
import Grid from '../../foundations/layout';
import Icon, { TIconGlyph } from '../icon';

import PStatusBadge from './StatusBadge.props';
import { TStatusBadgeSize } from './StatusBadge.types';
import { DEFAULT_STATUSBADGE_SIZE, STATUSBADGE_SIZE_MAP } from './StatusBadge.constants';

const StatusBadgeBase: React.FC<PStatusBadge> = ({
    size = DEFAULT_STATUSBADGE_SIZE,
    status,
    ...rest
}: PStatusBadge): JSX.Element => {
    const sizeValue: TStatusBadgeSize = STATUSBADGE_SIZE_MAP[size];
    const sizeAdjustment = size && STATUSBADGE_SIZE_MAP[size] > 16 ? 8 : 4;

    let glyph: TIconGlyph = 'circle-outline';

    switch (status) {
        case 'away':
            glyph = 'clock';
            break;
        case 'dnd':
            glyph = 'minus-circle';
            break;
        case 'online':
            glyph = 'check-circle';
            break;
        case 'offline':
        default:
    }

    return (
        <Shape {...rest} width={sizeValue + sizeAdjustment} radius={'circle'}>
            <Grid flex={1} alignment={'center'} justify={'center'}>
                <Icon glyph={glyph} size={sizeValue} />
            </Grid>
        </Shape>
    );
};

export default StatusBadgeBase;
