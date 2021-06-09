import React from 'react';

import Icon from '../icon';

import PIconButton from './IconButton.props';
import IconButtonRoot from './IconButton.root';

const IconButton = ({ size, icon, text, ...restIgnore }: PIconButton): JSX.Element => (
    <IconButtonRoot size={size}>
        <Icon glyph={icon} />
        {text}
    </IconButtonRoot>
);

export default IconButton;
