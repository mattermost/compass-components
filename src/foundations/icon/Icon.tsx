import React from 'react';
import clsx from 'clsx';

import StyledIcon from './Icon.styles';
import { PIcon } from './Icon.props';
import { ICON_GLYPHS } from './Icon.constants';

const Icon: React.FC<PIcon> = ({ className, size = 20, glyph = 'mattermost', ...props }) => (
    <StyledIcon
        className={clsx(className, 'Icon', `icon-${ICON_GLYPHS[glyph]}`)}
        data-size={size}
        data-glyph={glyph}
        {...props}
    />
);

export default Icon;
