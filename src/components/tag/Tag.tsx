import React from 'react';

import { Utils } from '../../shared';

import PTag from './Tag.props';
import TagRoot from './Tag.root';

const Tag = ({ variant, size, text, ...rest }: PTag): JSX.Element => {
    const hasText = Utils.isString(text) && text.length > 0;

    return (
        <TagRoot element={'span'} size={size} variant={variant} {...rest}>
            {hasText && text}
        </TagRoot>
    );
};

export default Tag;
