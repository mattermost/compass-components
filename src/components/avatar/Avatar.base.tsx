import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Grid from '../../foundations/layout';
import Shape from '../../foundations/shape';
import { Utils } from '../../shared';
import Heading from '../heading';
import StatusBadge from '../status-badge';

import {
    AVATAR_CORNER_RADIUS_SIZE_MAP,
    AVATAR_SIZE_MAP,
    AVATAR_STATUS_SIZE_MAP,
    AVATAR_TEXT_SIZE_MAP,
    DEFAULT_AVATAR_SIZE,
} from './Avatar.constants';
import PAvatar from './Avatar.props';

type PStyledAvatarImage = {
    image: string;
};

// TODO@all: not happy with this solution, but it works for now
const StyledAvatarImage = styled.div<PStyledAvatarImage>`
    flex: 1;
    background-image: url(${(props): string => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

type PLazyAvatarImage = {
    source: string;
};

// TODO@all: equally unhappy with this. For now it is ok, but should be changed
//           once we find a better solution (create a generic LazyImage component?)
const LazyAvatarImage = ({ source }: PLazyAvatarImage): JSX.Element => {
    const [image, setImage] = useState('');

    useEffect(() => {
        Utils.getBase64(source)
            .then((imageString) => setImage(imageString))
            .catch(() => {});
    }, [source]);

    if (!image) {
        // TODO@all: this is a temporary solution and should be replaced with
        //           a dedicated `Skeleton` component
        return <div className={'skeleton'} />;
    }

    return <StyledAvatarImage image={image} />;
};

const AvatarBase = ({
    size = DEFAULT_AVATAR_SIZE,
    isTeam = false,
    userName,
    image,
    className,
    status,
    ...rest
}: PAvatar): JSX.Element => (
    <div className={className}>
        <Shape
            borderRadius={isTeam ? AVATAR_CORNER_RADIUS_SIZE_MAP[size] : 'circle'}
            width={AVATAR_SIZE_MAP[size]}
            height={AVATAR_SIZE_MAP[size]}
            {...rest}
        >
            {image ? (
                <Grid flex={1} alignment={'stretch'} justify={'stretch'}>
                    <LazyAvatarImage source={image} />
                </Grid>
            ) : (
                <Grid flex={1} alignment={'center'} justify={'center'}>
                    <Heading
                        element={'h6'}
                        weight={'bold'}
                        margin={'none'}
                        size={AVATAR_TEXT_SIZE_MAP[size]}
                    >
                        {userName.slice(0, 2)}
                    </Heading>
                </Grid>
            )}
        </Shape>
        {status && <StatusBadge status={status} size={AVATAR_STATUS_SIZE_MAP[size]} />}
    </div>
);

export default AvatarBase;
