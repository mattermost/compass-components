import { createGlobalStyle } from 'styled-components';

import { TBorderRadiusSizes, TElevationLevel } from '../../shape';
import { TTheme } from '../themes/theme.types';

import VColors from './variables.colors';
import VElevation from './variables.elevation';
import VFontFaces from './variables.font-faces';
import VFontStyle from './variables.font-style';

type PGlobalStyles = {
    theme: TTheme;
};

const getPrimaryColor = (props: PGlobalStyles): string => props.theme.palette.primary.main;

const GlobalStyle = createGlobalStyle`
    :root {
        --gutter-default: 8px;
        
        ${VColors}
        ${VFontFaces}
        ${VFontStyle}
        ${VElevation}
      
        --primary-color: ${getPrimaryColor};

        --border-radius-0: 0;
        --border-radius-4: calc(var(--gutter-default) * .5);
        --border-radius-8: var(--gutter-default);
        --border-radius-12: calc(var(--gutter-default) * 1.5);
        --border-radius-16: calc(var(--gutter-default) * 2);
        --border-radius-20: calc(var(--gutter-default) * 2.5);
        --border-radius-24: calc(var(--gutter-default) * 3);
        --border-radius-circle: 50%;
        // setting a big value renders a pill-shape border-radius
        --border-radius-pill: 10000px;
        
        --border-default: 1px solid rgba(61,60,64,0.16);
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
