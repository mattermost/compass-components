// shared types for `Heading` and `Text` component
import { TTHemeTextColors } from '../foundations/theme-provider/themes/theme.types';

type TFontWeight = 'light' | 'regular' | 'bold';

type TFontMargin = 'none' | 'top' | 'bottom' | 'both';

type TFontColor = 'inherit' | keyof TTHemeTextColors;

export type { TFontColor, TFontMargin, TFontWeight };
