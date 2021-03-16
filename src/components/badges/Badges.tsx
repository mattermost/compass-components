import React from 'react';

import Shape from '../../foundations/shape';
import Typography from '../../foundations/typography';
import Grid, { GridSpacing } from '../../foundations/layout';

import PMentionBadges from './Badges.props';

const MentionBadges: React.FC<PMentionBadges> = ({
    location,
    mentionCount = 1,
    mentionLimit = 99,
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
        <Shape
            borderRadius={'pill'}
            elevation={1}
            elevationOnHover={3}
            background={background}
            height={16}
        >
            <Grid
                alignment={'center'}
                justify={'center'}
                flex={1}
                padding={GridSpacing.symmetric({ vertical: 0, horizontal: 50 })}
            >
                <Typography
                    removeLineHeight
                    variant={'body'}
                    size={50}
                    color={color}
                    gutter={'none'}
                >
                    <strong>
                        {mentionCount > mentionLimit ? `${mentionLimit}+` : mentionCount}
                    </strong>
                </Typography>
            </Grid>
        </Shape>
    );
};

export default MentionBadges;
