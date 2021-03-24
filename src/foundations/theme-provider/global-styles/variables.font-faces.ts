import { css } from 'styled-components';

import MetropolisBold from '../../../assets/fonts/Metropolis-Bold.woff2';
import MetropolisBoldItalic from '../../../assets/fonts/Metropolis-BoldItalic.woff2';
import MetropolisRegular from '../../../assets/fonts/Metropolis-Regular.woff2';
import MetropolisRegularItalic from '../../../assets/fonts/Metropolis-RegularItalic.woff2';
import MetropolisLight from '../../../assets/fonts/Metropolis-Light.woff2';
import MetropolisLightItalic from '../../../assets/fonts/Metropolis-LightItalic.woff2';
import OpenSansBold from '../../../assets/fonts/OpenSans-Bold.ttf';
import OpenSansBoldItalic from '../../../assets/fonts/OpenSans-BoldItalic.ttf';
import OpenSansRegular from '../../../assets/fonts/OpenSans-Regular.ttf';
import OpenSansRegularItalic from '../../../assets/fonts/OpenSans-RegularItalic.ttf';
import OpenSansLight from '../../../assets/fonts/OpenSans-Light.ttf';
import OpenSansLightItalic from '../../../assets/fonts/OpenSans-LightItalic.ttf';

const VFontFaces = css`
    // Metropolis font definitions
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisBold}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisBoldItalic}) format('woff2');
        font-weight: 700;
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
        font-family: 'OpenSans';
        src: url(${OpenSansBold}) format('ttf');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansBoldItalic}) format('ttf');
        font-weight: 700;
        font-style: italic;
    }
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansRegular}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansRegularItalic}) format('ttf');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansLight}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansLightItalic}) format('ttf');
        font-weight: 300;
        font-style: italic;
    }
`;

export default VFontFaces;
