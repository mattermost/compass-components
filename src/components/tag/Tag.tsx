import React from 'react';

import { DEFAULT_TEXT_SIZE } from '../text/Text.constants';

import PTag from './Tag.props';
import TagRoot from './Tag.root';

const Tag = ({ type, size = DEFAULT_TEXT_SIZE, text, ...rest }: PTag): JSX.Element => {
    const onClick = (): void => {
        if (type === 'highlight') {
            // eslint-disable-next-line no-console
            console.log('#### Mention clicked!');
        }
    };

    return (
        <TagRoot element={'span'} size={size} type={type} onClick={onClick} {...rest}>
            {text}
        </TagRoot>
    );
};

export default Tag;
