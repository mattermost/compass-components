import React from 'react';

import Shape from '../../foundations/shape';
import Grid, { GridSpacing } from '../../foundations/layout';
import Text from '../text';

import PMentionBadge from './Badges.props';

const MentionBadge: React.FC<PMentionBadge> = ({
    location,
    mentionCount = 1,
    mentionLimit = 99,
    width = 'auto',
}: PMentionBadge): JSX.Element => {
    let color: 'primary' | 'secondary' | 'contrast' | 'accent' | undefined = 'primary';

    const isUnreadBadge = mentionCount === 0;

    let background = 'var(--shape-background-color)';

    switch (location) {
        case 'sidebar':
            background = 'var(--shape-background-color)';
            color = 'accent';
            break;
        case 'menu':
            background = 'var(--disabled-text-color)';
            color = 'contrast';
            break;
        default:
            break;
    }

    return (
        <Shape
            borderRadius={isUnreadBadge ? 'circle' : 'pill'}
            elevation={1}
            elevationOnHover={3}
            background={background}
            width={width}
        >
            {!isUnreadBadge && (
                <Grid
                    alignment={'center'}
                    justify={'center'}
                    flex={1}
                    padding={GridSpacing.symmetric({ vertical: 0, horizontal: 50 })}
                >
                    <Text element={'p'} size={75} color={color} margin={'none'}>
                        <strong>
                            {mentionCount > mentionLimit ? `${mentionLimit}+` : mentionCount}
                        </strong>
                    </Text>
                </Grid>
            )}
        </Shape>
    );
};

export default MentionBadge;
