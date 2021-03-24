import React from 'react';

import Shape from '../../foundations/shape';
import Typography from '../../foundations/typography';
import Grid, { GridSpacing } from '../../foundations/layout';

import PMentionBadge from './Badges.props';

const MentionBadge: React.FC<PMentionBadge> = ({
    location,
    mentionCount = 1,
    mentionLimit = 99,
}: PMentionBadge): JSX.Element => {
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
        <Shape
            borderRadius={'pill'}
            elevation={1}
            elevationOnHover={3}
            background={background}
            width={'auto'}
        >
            <Grid
                alignment={'center'}
                justify={'center'}
                flex={1}
                padding={GridSpacing.symmetric({ vertical: 0, horizontal: 50 })}
            >
                <Typography variant={'body'} size={50} color={color} gutter={'none'}>
                    <strong>
                        {mentionCount > mentionLimit ? `${mentionLimit}+` : mentionCount}
                    </strong>
                </Typography>
            </Grid>
        </Shape>
    );
};

export default MentionBadge;
