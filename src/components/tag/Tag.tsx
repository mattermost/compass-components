import React from 'react';

import { DEFAULT_TEXT_SIZE } from '../text/Text.constants';

import PTag from './Tag.props';
import TagRoot from './Tag.root';

const Tag = ({ variant, size = DEFAULT_TEXT_SIZE, text, ...rest }: PTag): JSX.Element => {
    const onClick = (): void => {
        if (variant === 'highlight') {
            // eslint-disable-next-line no-console
            console.log('#### Mention clicked!');
        }
    };

    return (
        <TagRoot element={'span'} size={size} variant={variant} onClick={onClick} {...rest}>
            {text}
        </TagRoot>
    );
};

export default Tag;
