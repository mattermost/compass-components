import React from 'react';

import Shape from '../../foundations/shape';
import Grid, { GridSpacing } from '../../foundations/layout';
import Text from '../text';

import PMentionBadge from './Badges.props';

const MentionBadge: React.FC<PMentionBadge> = ({
    location,
    mentionCount = 1,
    mentionLimit = 99,
}: PMentionBadge): JSX.Element => {
    const color: 'primary' | 'secondary' | undefined = 'primary';

    let background = 'var(--shape-background-color)';

    switch (location) {
        case 'sidebar':
            background = 'var(--shape-background-color)';
            break;
        case 'menu':
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
                <Text element={'p'} size={50} color={color} margin={'none'}>
                    <strong>
                        {mentionCount > mentionLimit ? `${mentionLimit}+` : mentionCount}
                    </strong>
                </Text>
            </Grid>
        </Shape>
    );
};

export default MentionBadge;
