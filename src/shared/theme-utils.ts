import colors from '../foundations/colors';
import { TBaseColorShade } from '../foundations/colors/colors.types';
import { TThemeColorDefinition } from '../foundations/theme-provider/themes/theme.types';

import { darken, getContrastRatio, lighten } from './color-utils';
import Utils from './utils';

function getContrastText(background: string): string {
    return getContrastRatio('#000000', background) >= 7 ? '#000000' : '#FFFFFF';
}

function createThemeColor(color: string, shade: TBaseColorShade = 500): TThemeColorDefinition {
    if (colors[color] && shade && colors[color][shade]) {
        if (shade <= 200) {
            Utils.warn(
                `compass-omponents/createThemeColor: a shade of ${shade} might be insufficient. We will create shades with tonal offset for you, but it might still not be enough. Consider using a higher shade value.`
            );
        }

        if (shade >= 700) {
            Utils.warn(
                `compass-omponents/createThemeColor: a shade of ${shade} might be insufficient. We will create shades with tonal offset for you, but it might still not be enough. Consider using a higher shade value.`
            );
        }

        return {
            lighter:
                shade >= 100 ? colors[color][shade - 200] : lighten(colors[color][shade], 0.34),
            light: shade >= 200 ? colors[color][shade - 100] : lighten(colors[color][shade], 0.17),
            main: colors[color][shade],
            dark: shade <= 600 ? colors[color][shade + 100] : darken(colors[color][shade], 0.17),
            darker: shade <= 700 ? colors[color][shade + 100] : darken(colors[color][shade], 0.34),
            contrast: getContrastText(colors[color][shade]),
        };
    }

    const themeColor: TThemeColorDefinition = {
        lighter: '',
        light: lighten(color, 0.17),
        main: color,
        dark: darken(color, 0.17),
        darker: '',
        contrast: getContrastText(color),
    };

    themeColor.lighter = lighten(themeColor.light, 0.17);
    themeColor.darker = darken(themeColor.dark, 0.17);

    return themeColor;
}

export { createThemeColor, getContrastRatio };
