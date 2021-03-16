import React from 'react';

import Shape from '../../foundations/shape';
import Typography from '../../foundations/typography';
import Grid from '../../foundations/layout/Grid';

import PMentionBadges from './Badges.props';

const MentionBadges: React.FC<PMentionBadges> = ({
    location,
    mentionCount = 1,
}: PMentionBadges): JSX.Element => {
    let color: 'primary' | 'accent' | 'contrast' | undefined = 'primary';
    let background = 'var(--shape-background-color)';

    switch (location) {
        case 'sidebar':
            color = 'accent';
            background = 'var(--shape-background-color)';
            break;
        case 'menu':
            color = 'contrast';
            background = 'var(--disabled-text-color)';
            break;
        default:
            break;
    }

    return (
        <Grid alignment={'flex-end'} flex={1}>
            <Shape
                border
                borderRadius={'pill'}
                elevation={1}
                elevationOnHover={3}
                width={20}
                height={16}
                background={background}
            >
                <Grid alignment={'flex-end'} flex={1}>
                    <Typography variant={'h6'} size={100} color={color}>
                        {mentionCount}
                    </Typography>
                </Grid>
            </Shape>
        </Grid>
    );
};

export default MentionBadges;
