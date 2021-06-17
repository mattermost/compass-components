import React from 'react';

import { Utils } from '../../shared';

import PTag from './Tag.props';
import TagRoot from './Tag.root';
import { DEFAULT_TAG_VARIANT, DEFAULT_TAG_SIZE } from './Tag.constants';

const Tag = ({
    variant = DEFAULT_TAG_VARIANT,
    size = DEFAULT_TAG_SIZE,
    text,
    ...rest
}: PTag): JSX.Element => {
    const hasText = Utils.isString(text) && text.length > 0;

    return (
        <TagRoot element={'span'} size={size} variant={variant} {...rest}>
            {hasText && text}
        </TagRoot>
    );
};

export default Tag;
