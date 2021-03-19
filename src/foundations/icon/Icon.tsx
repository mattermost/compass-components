import React from 'react';
import clsx from 'clsx';

import StyledIcon from './Icon.styles';
import { PIcon } from './Icon.props';
import { DEFAULT_ICON_SIZE, ICON_GLYPHS } from './Icon.constants';

const Icon: React.FC<PIcon> = ({
    ariaLabel,
    className,
    size = DEFAULT_ICON_SIZE,
    glyph = 'mattermost',
}): JSX.Element => (
    <StyledIcon
        aria-label={ariaLabel}
        className={clsx(className, 'Icon', `icon-${ICON_GLYPHS[glyph]}`)}
        data-size={size}
        data-glyph={glyph}
    />
);

export default Icon;
