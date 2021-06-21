import { TContainerElement } from '../../shared';

type TGridAlignment = 'initial' | 'flex-start' | 'center' | 'flex-end' | 'stretch';

type TGridJustify =
    | 'initial'
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

type TGridFlex = number | 'auto' | 'initial';

export type { TContainerElement as TGridElement, TGridAlignment, TGridJustify, TGridFlex };
