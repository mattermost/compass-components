import React from 'react';

import Text from '../../text';

import { PIconButton } from './IconButton.props';
import { TEXT_SIZES, DEFAULT_TEXT_SIZE } from './IconButton.constants';

const IconButtonBase: React.FC<PIconButton> = ({ label, size, ...rest }): JSX.Element => (
    <button {...rest}>
        <Text
            color="inherit"
            element="span"
            inheritLineHeight
            size={TEXT_SIZES[size] || DEFAULT_TEXT_SIZE}
            weight="bold"
        >
            {label}
        </Text>
    </button>
);

export default IconButtonBase;
