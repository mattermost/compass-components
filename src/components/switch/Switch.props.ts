import {
    TSwitchSize,
    TSwitchState,
    TSwitchWidths,
    TSwitchHeights,
    TSwitchInnerWidths,
} from './Switch.types';

export type PSwitch = {
    labelText?: string;
    state?: TSwitchState;
    size?: TSwitchSize;
    width?: TSwitchWidths;
    innerWidth?: TSwitchInnerWidths;
    height?: TSwitchHeights;
    className?: string;
    borderColor?: string;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
