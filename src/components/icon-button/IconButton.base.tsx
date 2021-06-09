import React from 'react';

import { DEFAULT_ICON_BUTTON_SIZE } from './IconButton.constants';
import PIconButton from './IconButton.props';

const IconButtonBase = ({ size = DEFAULT_ICON_BUTTON_SIZE }: PIconButton): JSX.Element => (
    <div>Hello 👋, I am a IconButton component with a default size of '{size}'.</div>
);

export default IconButtonBase;
