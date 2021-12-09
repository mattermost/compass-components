import React from 'react';
import glyphMap from '@mattermost/compass-icons/components';
import type { NonBrokenIconGlyphTypes } from '@mattermost/compass-icons/IconGlyphs';

import { Utils } from '../../shared';

import IconRoot from './Icon.root';
import {
    DEFAULT_ICON_COLOR,
    DEFAULT_ICON_GLYPH,
    DEFAULT_ICON_SIZE,
    ICON_GLYPHS,
} from './Icon.constants';
import type { TIconColor, TIconGlyph, TIconSizeToken } from './Icon.types';

type PIcon = {
    /**
     * the size the icon is rendered with
     * @default 20
     */
    size?: TIconSizeToken;
    /**
     * the color token the Icon should be rendered with.
     * when not passed a value it will inherit the color.
     * @default 'inherit'
     */
    color?: TIconColor;
    /**
     * the icon-glyph that is being rendered
     */
    glyph?: TIconGlyph;
    /**
     * add an aria-label for a11y
     */
    ariaLabel?: string;
    /**
     * custom className
     */
    className?: string;
    /**
     * onClick handler
     */
    onClick?: React.MouseEventHandler;
};

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

    // we have a "placeholder" icon ('none') that does not render an icon at all
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

export type { PIcon };
export default Icon;
