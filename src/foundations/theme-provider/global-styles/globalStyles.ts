import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-unassigned-import
import '@mattermost/compass-icons';

import { setAlpha } from '../../../shared';
import { TTheme } from '../themes/theme.types';

import VElevation from './variables.elevation';
import VFontFaces from './variables.font-faces';
import VFontStyle from './variables.font-style';
import reset from './reset-styles';
import defaultStyles from './default-styles';

type PGlobalStyles = {
    theme: TTheme;
};

const GlobalStyle = createGlobalStyle`
    ${reset};

    :root {
        ${VFontFaces}
        ${VFontStyle}
        ${VElevation}
    }
    
    ${defaultStyles};

    .skeleton {
        display: block;
        flex: 1;
        background: ${(props): string => props.theme.action.disabled};
        overflow: hidden;
        position: relative;

        &::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            background: linear-gradient(
                    66deg,
                    ${(props): string => setAlpha(props.theme.action.hover, 0)} 20%,
                    ${(props): string => setAlpha(props.theme.action.hover, 0.32)} 50%,
                    ${(props): string => setAlpha(props.theme.action.hover, 0)} 70%
            );
            animation: shimmer 1.5s infinite;
            content: '';
        }
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
`;

export type { PGlobalStyles };
export default GlobalStyle;
