import React from 'react';

import Shape from '../../foundations/shape';
import Grid from '../../foundations/layout';
import Icon, { TIconGlyph } from '../icon';

import PStatusBadge from './StatusBadge.props';

const StatusBadgeBase: React.FC<PStatusBadge> = ({
    size = 12,
    ...rest
}: PStatusBadge): JSX.Element => {
    let glyph: TIconGlyph = 'check-circle';

    switch (status) {
        case 'away':
            glyph = 'clock';
            break;
        case 'dnd':
            glyph = 'minus-circle';
            break;
        case 'offline':
            glyph = 'none';
            break;
        case 'online':
        default:
    }

    return (
        <Shape {...rest} width={size} borderRadius={'circle'}>
            <Grid flex={1} alignment={'center'} justify={'center'}>
                <Icon glyph={glyph} size={size} />
            </Grid>
        </Shape>
    );
};

export default StatusBadgeBase;
