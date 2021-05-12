import React from 'react';

import Text from '../../text';

import { PButton } from './Button.props';
import { TEXT_SIZES, DEFAULT_TEXT_SIZE } from './Button.constants';

const ButtonBase: React.FC<PButton> = ({ label, size, ...rest }): JSX.Element => (
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

export default ButtonBase;
