import type { TContainerElement } from '../../shared';

type TFlexAlignment =
    | 'initial'
    | 'center'
    | 'baseline'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'start'
    | 'end'
    | 'stretch';

type TFlexJustify =
    | 'initial'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

type TFlexFlex = number | 'auto' | 'initial';

export type { TContainerElement as TFlexElement, TFlexAlignment, TFlexJustify, TFlexFlex };
