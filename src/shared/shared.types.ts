import { TTHemeTextColors } from '../foundations/theme-provider/themes/theme.types';

// shared types for Typography (Text and Heading)
type TFontWeight = 'light' | 'regular' | 'bold';

type TFontMargin = 'none' | 'top' | 'bottom' | 'both';

type TFontColor = 'inherit' | keyof TTHemeTextColors;

// generally shared types
type TComponentSizeToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type { TFontColor, TFontMargin, TFontWeight, TComponentSizeToken };
