import React from 'react';

import Grid, { Spacing } from '../../foundations/layout';
import Text from '../text';

import {
    DEFAULT_MENTIONBADGE_SIZE,
    MENTIONBADGE_PADDING_SIZE_MAP,
    MENTIONBADGE_TEXT_SIZE_MAP,
} from './MentionBadge.constants';
import PMentionBadge from './MentionBadge.props';

const MentionBadgeBase: React.FC<PMentionBadge> = ({
    mentionCount = 1,
    mentionLimit = 99,
    size = DEFAULT_MENTIONBADGE_SIZE,
    ...rest
}: PMentionBadge): JSX.Element => {
    const isUnreadBadge = mentionCount === 0;
    const mentionLength = mentionCount.toString().length;

    return (
        <div {...rest}>
            {!isUnreadBadge && (
                <Grid
                    alignment={'center'}
                    justify={'center'}
                    flex={1}
                    padding={Spacing.symmetric({
                        vertical: 0,
                        horizontal: MENTIONBADGE_PADDING_SIZE_MAP[size][mentionLength - 1],
                    })}
                >
                    <Text
                        element={'span'}
                        size={MENTIONBADGE_TEXT_SIZE_MAP[size]}
                        margin={'none'}
                        weight={'bold'}
                    >
                        {mentionCount > mentionLimit ? `${mentionLimit}+` : mentionCount}
                    </Text>
                </Grid>
            )}
        </div>
    );
};

export default MentionBadgeBase;
