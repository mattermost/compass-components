import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Utils } from '../../shared';
import MentionBadge from '../mention-badge';
import StatusBadge from '../status-badge';

import { AVATAR_SIZE_MAP, DEFAULT_AVATAR_SIZE } from './Avatar.constants';
import PAvatar from './Avatar.props';

type PStyledAvatarImage = {
    image: string;
};

// TODO@all: not happy with this solution, but it works for now
const StyledAvatarImage = styled.div<PStyledAvatarImage>`
    flex: 1;
    align-self: stretch;
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

const capitalizeUsername = (name: string): string =>
    name.charAt(0).toUpperCase() + name.slice(1, 2);

const AvatarBase = ({
    size = DEFAULT_AVATAR_SIZE,
    isTeam = false,
    mentions,
    name,
    image,
    className,
    status,
}: PAvatar): JSX.Element => (
    <div className={className}>
        {image ? <LazyAvatarImage source={image} /> : <div>{capitalizeUsername(name)}</div>}
        {size !== 'xxxs' && status && (
            <StatusBadge status={status} size={AVATAR_SIZE_MAP[size].status.size} />
        )}
        {isTeam && Utils.isNumber(mentions) && (
            <MentionBadge
                mentions={Math.abs(Math.trunc(mentions))}
                size={size === 'xl' ? 'lg' : 'md'}
            />
        )}
    </div>
);

export default AvatarBase;
