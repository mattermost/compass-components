import { createGlobalStyle } from 'styled-components';

import { TBorderRadiusSizes, TElevationLevel } from '../../shape';
import { TTheme } from '../theme.types';

import VElevation from './variables.elevation';
import VFontFaces from './variables.font-faces';
import VFontStyle from './variables.font-style';

type PGlobalStyles = {
    theme: TTheme;
};

const getPrimaryColor = (props: PGlobalStyles): string => props.theme.palette.primary.main;

const getElevationOpacity = (props: PGlobalStyles): number =>
    props.theme.type === 'dark' ? 0.32 : 0.08;

const GlobalStyle = createGlobalStyle`
    :root {
        --gutter-default: 8px;
        
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
        
        --elevation-shadow-1: 0 2px 3px 0 rgba(0,0,0, ${getElevationOpacity} );
        --elevation-shadow-2: 0 4px 6px 0 rgba(0,0,0, ${getElevationOpacity} );
        --elevation-shadow-3: 0 6px 14px 0 rgba(0,0,0, ${getElevationOpacity} );
        --elevation-shadow-4: 0 8px 24px 0 rgba(0,0,0, ${getElevationOpacity} );
        --elevation-shadow-5: 0 12px 32px 0 rgba(0,0,0, ${getElevationOpacity} );
        --elevation-shadow-6: 0 20px 32px 0 rgba(0,0,0, ${getElevationOpacity} );
        
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
export default GlobalStyle;
