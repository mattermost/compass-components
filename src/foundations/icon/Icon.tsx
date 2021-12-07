import React from 'react';
import glyphMap from '@mattermost/compass-icons/components';
import type { NonBrokenIconGlyphTypes } from '@mattermost/compass-icons/IconGlyphs';

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
        ...rest
    } = props;

    Utils.assert(
        ICON_GLYPHS.includes(glyph),
        `Icon: please provide a valid option for the \`iconGlyph\` property. Choose from the following: ${ICON_GLYPHS.join(
            ', '
        )}.`
    );

    if (glyph === 'none') {
        return <IconRoot size={size} color={'inherit'} {...rest} />;
    }

    const Component = glyphMap[glyph as NonBrokenIconGlyphTypes];

    return (
        <IconRoot size={size} color={color} {...rest}>
            <Component size={size} color={'currentColor'} />
        </IconRoot>
    );
};

export default Icon;
