import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import upperFirst from 'lodash.upperfirst';

import { Utils } from '../../shared';

import {
    AVATAR_ELEMENTS,
    AVATAR_SIZE_MAP,
    AVATAR_SIZES,
    DEFAULT_AVATAR_ELEMENT,
    DEFAULT_AVATAR_SIZE,
    DEFAULT_AVATAR_VARIANT,
} from './Avatar.constants';
import type PAvatar from './Avatar.props';
import AvatarRoot, { AvatarMentionBadgeRoot, AvatarStatusBadgeRoot } from './Avatar.root';

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

const Avatar = (props: PAvatar): JSX.Element => {
    const {
        element = DEFAULT_AVATAR_ELEMENT,
        size = DEFAULT_AVATAR_SIZE,
        variant = DEFAULT_AVATAR_VARIANT,
        disableHover = false,
        isActive = false,
        onClick,
        mentions,
        name,
        image,
        status,
        ...rest
    } = props;

    Utils.assert(
        AVATAR_ELEMENTS.includes(element),
        `Avatar: component was used with an unsupported element '${element}'.
                Please provide one from these available options: ${AVATAR_ELEMENTS.join(', ')}.`
    );

    // correctness of index is guaranteed by using a tuple for AVATAR_SIZES
    // - `MentionBadges` are best to be used at size `md` or above (`sm` is the smallest supported size)
    // - `StatusBadges` are usable on nearly all sizes (except for `xxs` and `xxxs`)
    const sizeIndex = AVATAR_SIZES.indexOf(size);

    const rootProperties = {
        size,
        variant,
        onClick,
        disableHover,
        isActive,
        ...rest,
    };

    return (
        <AvatarRoot
            as={element}
            hasUnreadBadge={Utils.isNumber(mentions) && mentions > 0 && sizeIndex > 2}
            {...rootProperties}
        >
            {image ? <LazyAvatarImage source={image} /> : <div>{upperFirst(name).slice(0, 2)}</div>}
            {variant === 'circle' && sizeIndex > 0 && status && (
                <AvatarStatusBadgeRoot
                    status={status}
                    size={AVATAR_SIZE_MAP[size].status.size}
                    offset={AVATAR_SIZE_MAP[size].status.offset}
                />
            )}
            {variant === 'rounded' && Utils.isNumber(mentions) && sizeIndex > 2 && (
                <AvatarMentionBadgeRoot
                    isUnreadBadge={mentions === 0}
                    mentions={Math.abs(Math.trunc(mentions))}
                    size={sizeIndex >= 6 ? 'lg' : 'md'}
                />
            )}
        </AvatarRoot>
    );
};

export default Avatar;
