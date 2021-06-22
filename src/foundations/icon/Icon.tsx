import React from 'react';

import { Utils } from '../../shared';

import PIcon from './Icon.props';
import IconRoot from './Icon.root';
import {
    DEFAULT_ICON_COLOR,
    DEFAULT_ICON_GLYPH,
    DEFAULT_ICON_SIZE,
    ICON_GLYPHS,
} from './Icon.constants';

const Icon = ({
    glyph = DEFAULT_ICON_GLYPH,
    size = DEFAULT_ICON_SIZE,
    color = DEFAULT_ICON_COLOR,
    ...rest
}: PIcon): JSX.Element => {
    Utils.assert(
        ICON_GLYPHS.includes(glyph),
        `Compass Components - Icon: please provide a valid option for the \`iconGlyph\` property. Choose from the following: ${ICON_GLYPHS.join(
            ', '
        )}.`
    );

    const rootProperties = {
        size,
        color,
        glyph,
    };

    return <IconRoot {...rootProperties} {...rest} />;
};

export default Icon;
