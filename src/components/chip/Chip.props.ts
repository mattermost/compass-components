import type React from 'react';

import type { TIconGlyph } from '../../foundations/icon';
import type { PGlobalsMisc } from '../../shared/props';

import type { TChipSizeToken } from './Chip.types';

type PChip = PGlobalsMisc & {
    /**
     * the size token to define the Chip size
     * @default 'md'
     */
    size?: TChipSizeToken;
    /**
     * When set it renders an avatar without status indicator as leading visual.
     * This prop takes precedence over the `icon` prop
     */
    avatar?: React.ReactElement;
    /**
     * When set it renders an icon as leading visual.
     * This prop does not render when the `avatar` prop is set
     */
    icon?: TIconGlyph;
    /**
     * handle a click on the delete icon.
     * The delete icon is only rendered, when this prop is set
     */
    onDelete?: React.MouseEventHandler;
};

export type PChipRoot = PGlobalsMisc & { hasLeadingElement: boolean };

export default PChip;
