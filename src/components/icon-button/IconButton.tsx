import React from 'react';

import Icon from '../../foundations/icon';

import {
    DEFAULT_ICON_BUTTON_ELEMENT,
    DEFAULT_ICON_BUTTON_SIZE,
    ICON_BUTTON_DEFINITIONS,
} from './IconButton.constants';
import PIconButton from './IconButton.props';
import IconButtonRoot from './IconButton.root';

const IconButton = ({
    element = DEFAULT_ICON_BUTTON_ELEMENT,
    size = DEFAULT_ICON_BUTTON_SIZE,
    icon,
    label,
    ...rest
}: PIconButton): JSX.Element => (
    <IconButtonRoot
        as={element}
        size={size}
        onClick={(): void => {
            // eslint-disable-next-line no-console
            console.log('#### IconButton clicked!');
        }}
        {...rest}
    >
        <Icon glyph={icon} size={ICON_BUTTON_DEFINITIONS[size].iconSize} />
        {label && <span>{label}</span>}
    </IconButtonRoot>
);

export default IconButton;
