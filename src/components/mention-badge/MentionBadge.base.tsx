import React from 'react';

import Shape from '../../foundations/shape';
import Grid, { Spacing } from '../../foundations/layout';
import Text from '../text';

import PMentionBadge from './MentionBadge.props';

const MentionBadgeBase: React.FC<PMentionBadge> = ({
    mentionCount = 1,
    mentionLimit = 99,
    ...rest
}: PMentionBadge): JSX.Element => {
    const isUnreadBadge = mentionCount === 0;

    return (
        <Shape {...rest} borderRadius={isUnreadBadge ? 'circle' : 'pill'}>
            {!isUnreadBadge && (
                <Grid
                    alignment={'center'}
                    justify={'center'}
                    flex={1}
                    padding={Spacing.symmetric({ vertical: 0, horizontal: 50 })}
                >
                    <Text element={'span'} size={50} margin={'none'} weight={'bold'}>
                        {mentionCount > mentionLimit ? `${mentionLimit}+` : mentionCount}
                    </Text>
                </Grid>
            )}
        </Shape>
    );
};

export default MentionBadgeBase;
