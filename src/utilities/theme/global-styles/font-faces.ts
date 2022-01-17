import { createGlobalStyle } from 'styled-components';

import MetropolisSemiBold from '../../../assets/fonts/Metropolis-SemiBold.woff2';
import MetropolisSemiBoldItalic from '../../../assets/fonts/Metropolis-SemiBoldItalic.woff2';
import MetropolisRegular from '../../../assets/fonts/Metropolis-Regular.woff2';
import MetropolisRegularItalic from '../../../assets/fonts/Metropolis-RegularItalic.woff2';
import MetropolisLight from '../../../assets/fonts/Metropolis-Light.woff2';
import MetropolisLightItalic from '../../../assets/fonts/Metropolis-LightItalic.woff2';
import OpenSansSemiBold from '../../../assets/fonts/OpenSans-SemiBold.woff2';
import OpenSansSemiBoldItalic from '../../../assets/fonts/OpenSans-SemiBoldItalic.woff2';
import OpenSansRegular from '../../../assets/fonts/OpenSans-Regular.woff2';
import OpenSansItalic from '../../../assets/fonts/OpenSans-Italic.woff2';
import OpenSansLight from '../../../assets/fonts/OpenSans-Light.woff2';
import OpenSansLightItalic from '../../../assets/fonts/OpenSans-LightItalic.woff2';

const GlobalFontFaces = createGlobalStyle`
    // Metropolis font definitions
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisSemiBold}) format('woff2');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisSemiBoldItalic}) format('woff2');
        font-weight: 600;
        font-style: italic;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisRegular}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisRegularItalic}) format('woff2');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisLight}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisLightItalic}) format('woff2');
        font-weight: 300;
        font-style: italic;
    }

    // OpenSans font definitions
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansSemiBold}) format('woff2');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansSemiBoldItalic}) format('woff2');
        font-weight: 600;
        font-style: italic;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansRegular}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansItalic}) format('woff2');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansLight}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansLightItalic}) format('woff2');
        font-weight: 300;
        font-style: italic;
    }
`;

export default GlobalFontFaces;
