import { TContainerElement, TInteractionElement } from '../../shared';

// TODO: maybe move the hard-coded ones to a separate union type (`TActionElement` maybe?)
type TShapeElement = TContainerElement | TInteractionElement;

type TShapeVariant = 'rectangle' | 'circle' | 'pill';

type TShapeBorderRadius = 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 'circle' | 'pill';

export type { TShapeVariant, TShapeElement, TShapeBorderRadius };
