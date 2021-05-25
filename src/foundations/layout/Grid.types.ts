import { TContainerElement } from '../../shared/types';

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

export type { TContainerElement as TGridComponent, TGridAlignment, TGridJustify, TGridFlex };
