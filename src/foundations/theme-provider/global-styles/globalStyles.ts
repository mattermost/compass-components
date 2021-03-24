import { createGlobalStyle } from 'styled-components';

import { TBorderRadiusSizes, TElevationLevel } from '../../shape';
import { TTheme } from '../themes/theme.types';

import VAnimations from './variables.animations';
import VDefaultStyles from './variables.default-styles';
import VSizes from './variables.sizes';
import VColors from './variables.colors';
import VElevation from './variables.elevation';
import VFontFaces from './variables.font-faces';
import VFontStyle from './variables.font-style';
import VBorderRadius from './variables.border-radius';
import reset from './reset-styles';

type PGlobalStyles = {
    theme: TTheme;
};

const GlobalStyle = createGlobalStyle`
    ${reset};

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
    
    ${VDefaultStyles}
`;

function getElevation(elevationLevel: TElevationLevel = 0): string {
    if (elevationLevel >= 0 && elevationLevel <= 6) {
        return `var(--elevation-shadow-${elevationLevel})`;
    }

    return 'var(--elevation-shadow-0)';
}

function getBorderRadius(size: TBorderRadiusSizes = 0): string {
    return `var(--border-radius-${size})`;
}

export { getElevation, getBorderRadius };
export type { PGlobalStyles };
export default GlobalStyle;
