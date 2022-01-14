import React from 'react';

import { Utils } from '../../shared';

import type PIcon from './Icon.props';
import IconRoot from './Icon.root';
import {
    DEFAULT_ICON_COLOR,
    DEFAULT_ICON_GLYPH,
    DEFAULT_ICON_SIZE,
    ICON_GLYPHS,
} from './Icon.constants';

const Icon = (props: PIcon): JSX.Element => {
    const {
        glyph = DEFAULT_ICON_GLYPH,
        size = DEFAULT_ICON_SIZE,
        color = DEFAULT_ICON_COLOR,
        className = '',
        ...rest
    } = props;

    Utils.assert(
        ICON_GLYPHS.includes(glyph),
        `Icon: please provide a valid option for the \`iconGlyph\` property. Choose from the following: ${ICON_GLYPHS.join(
            ', '
        )}.`
    );

    const rootProperties = {
        $size: size,
        $color: color,
        glyph,
        className: `${className} icon-${glyph}`,
    };

    return <IconRoot {...rootProperties} {...rest} />;
};

export default Icon;
