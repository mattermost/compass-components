/* eslint-disable import/max-dependencies */
import { css } from 'styled-components';

import MetropolisBlack from '../../../assets/fonts/Metropolis-Black.woff2';
import MetropolisBlackItalic from '../../../assets/fonts/Metropolis-BlackItalic.woff2';
import MetropolisExtraBold from '../../../assets/fonts/Metropolis-ExtraBold.woff2';
import MetropolisExtraBoldItalic from '../../../assets/fonts/Metropolis-ExtraBoldItalic.woff2';
import MetropolisBold from '../../../assets/fonts/Metropolis-Bold.woff2';
import MetropolisBoldItalic from '../../../assets/fonts/Metropolis-BoldItalic.woff2';
import MetropolisSemiBold from '../../../assets/fonts/Metropolis-SemiBold.woff2';
import MetropolisSemiBoldItalic from '../../../assets/fonts/Metropolis-SemiBoldItalic.woff2';
import MetropolisMedium from '../../../assets/fonts/Metropolis-Medium.woff2';
import MetropolisMediumItalic from '../../../assets/fonts/Metropolis-MediumItalic.woff2';
import MetropolisRegular from '../../../assets/fonts/Metropolis-Regular.woff2';
import MetropolisRegularItalic from '../../../assets/fonts/Metropolis-RegularItalic.woff2';
import MetropolisLight from '../../../assets/fonts/Metropolis-Light.woff2';
import MetropolisLightItalic from '../../../assets/fonts/Metropolis-LightItalic.woff2';
import MetropolisExtraLight from '../../../assets/fonts/Metropolis-ExtraLight.woff2';
import MetropolisExtraLightItalic from '../../../assets/fonts/Metropolis-ExtraLightItalic.woff2';
import MetropolisThin from '../../../assets/fonts/Metropolis-Thin.woff2';
import MetropolisThinItalic from '../../../assets/fonts/Metropolis-ThinItalic.woff2';
import OpenSansExtraBold from '../../../assets/fonts/OpenSans-ExtraBold.ttf';
import OpenSansExtraBoldItalic from '../../../assets/fonts/OpenSans-ExtraBoldItalic.ttf';
import OpenSansBold from '../../../assets/fonts/OpenSans-Bold.ttf';
import OpenSansBoldItalic from '../../../assets/fonts/OpenSans-BoldItalic.ttf';
import OpenSansSemiBold from '../../../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansSemiBoldItalic from '../../../assets/fonts/OpenSans-SemiBoldItalic.ttf';
import OpenSansRegular from '../../../assets/fonts/OpenSans-Regular.ttf';
import OpenSansRegularItalic from '../../../assets/fonts/OpenSans-RegularItalic.ttf';
import OpenSansLight from '../../../assets/fonts/OpenSans-Light.ttf';
import OpenSansLightItalic from '../../../assets/fonts/OpenSans-LightItalic.ttf';

const GlobalFontStyle = css`
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisBlack}) format('woff2');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisBlackItalic}) format('woff2');
        font-weight: 900;
        font-style: italic;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisExtraBold}) format('woff2');
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisExtraBoldItalic}) format('woff2');
        font-weight: 800;
        font-style: italic;
    }
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
        src: url(${MetropolisMedium}) format('woff2');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisMediumItalic}) format('woff2');
        font-weight: 500;
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
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisExtraLight}) format('woff2');
        font-weight: 200;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisExtraLightItalic}) format('woff2');
        font-weight: 200;
        font-style: italic;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisThin}) format('woff2');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisThinItalic}) format('woff2');
        font-weight: 100;
        font-style: italic;
    }

    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansExtraBold}) format('ttf');
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansExtraBoldItalic}) format('ttf');
        font-weight: 800;
        font-style: italic;
    }
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
        src: url(${OpenSansSemiBold}) format('ttf');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansSemiBoldItalic}) format('ttf');
        font-weight: 600;
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

export default GlobalFontStyle;
