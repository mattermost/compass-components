import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Utils } from '../../shared';
import MentionBadge from '../mention-badge';
import StatusBadge from '../status-badge';

import { AVATAR_SIZE_MAP, AVATAR_SIZES, DEFAULT_AVATAR_SIZE } from './Avatar.constants';
import PAvatar from './Avatar.props';

type PStyledAvatarImage = {
    image: string;
};

// TODO@all: not happy with this solution, but it works for now
//           should be replaced when the Image component is ready
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

// I would have prefered to use a css solution, but the `::first-letter`
// selector only works on block-level elements (not in flex)
const capitalizeUsername = (name: string): string =>
    name.charAt(0).toUpperCase() + name.slice(1, 2);

const AvatarBase = ({
    size = DEFAULT_AVATAR_SIZE,
    variant,
    onClick,
    mentions,
    name,
    image,
    status,
    className,
}: PAvatar): JSX.Element => {
    const Component = Utils.isFunction(onClick) ? 'button' : 'div';
    // correctness of index is guaranteed by using a tuple for AVATAR_SIZES
    // - `MentionBadges` are best to be used at size `md` or above (`sm` is the smallest supported size)
    // - `StatusBadges` are usable on nearly all sizes (except for `xxs`)
    const sizeIndex = AVATAR_SIZES.indexOf(size);

    return (
        <Component className={className} onClick={onClick}>
            {image ? <LazyAvatarImage source={image} /> : <div>{capitalizeUsername(name)}</div>}
            {variant === 'circle' && sizeIndex > 0 && status && (
                <StatusBadge status={status} size={AVATAR_SIZE_MAP[size].status.size} />
            )}
            {variant === 'rounded' && Utils.isNumber(mentions) && sizeIndex > 2 && (
                <MentionBadge
                    mentions={Math.abs(Math.trunc(mentions))}
                    size={sizeIndex >= 6 ? 'lg' : 'md'}
                />
            )}
        </Component>
    );
};

export default AvatarBase;
