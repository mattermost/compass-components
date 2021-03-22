import { createGlobalStyle } from 'styled-components';

import { TBorderRadiusSizes, TElevationLevel } from '../../shape';
import { TTheme } from '../themes/theme.types';

import VAnimations from './variables.animations';
import VSizes from './variables.sizes';
import VColors from './variables.colors';
import VElevation from './variables.elevation';
import VFontFaces from './variables.font-faces';
import VFontStyle from './variables.font-style';
import VBorderRadius from './variables.border-radius';

type PGlobalStyles = {
    theme: TTheme;
};

const GlobalStyle = createGlobalStyle`
    :root {
        ${VSizes}
        ${VColors}
        ${VFontFaces}
        ${VFontStyle}
        ${VElevation}
        ${VAnimations}
        ${VBorderRadius}

        --border-default: 1px solid var(--disabled-text-color);
    }
`;

function elevation(elevationLevel: TElevationLevel = 0): string {
    if (elevationLevel >= 0 && elevationLevel <= 6) {
        return `var(--elevation-shadow-${elevationLevel})`;
    }

    return 'var(--elevation-shadow-0)';
}

function borderRadius(size: TBorderRadiusSizes = 0): string {
    return `var(--border-radius-${size})`;
}

export { elevation, borderRadius };
export type { PGlobalStyles };
export default GlobalStyle;
