import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-unassigned-import
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';
import '@mattermost/compass-icons/css/compass-icons.css';

import { setAlpha } from '../../../shared';
import { TTheme } from '../themes';

import fontFaces from './font-faces';
import reset from './reset-styles';
import defaultStyles from './default-styles';

type PGlobalStyles = {
    theme: TTheme;
};

const GlobalStyle = createGlobalStyle`
    ${({ theme }: PGlobalStyles): FlattenSimpleInterpolation | null =>
        theme.noStyleReset ? null : reset};
    ${fontFaces}
    ${defaultStyles};

    // TODO@all: these styles need to be extracted (and adjusted) to the Skeleton component once it is ready to be built
    .skeleton {
        display: block;
        flex: 1;
        align-self: stretch;
        background: ${({ theme }): string => theme.background.skeleton};
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
                    90deg,
                    ${({ theme }): string => setAlpha(theme.background.shimmer, 0)} 0,
                    ${({ theme }): string => setAlpha(theme.background.shimmer, 0.25)} 40%,
                    ${({ theme }): string => setAlpha(theme.background.shimmer, 0.5)} 75%,
                    ${({ theme }): string => setAlpha(theme.background.shimmer, 0)}
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
