import type { MouseEventHandler } from 'react';

import type {
    TSwitchSizeToken,
    TSwitchWidth,
    TSwitchHeight,
    TSwitchInnerWidth,
} from './Switch.types';

type PSwitch = {
    /**
     * whether the switch button is rendered with a label
     * */
    label?: string;
    /**
     * the size of the switch
     * @default 'md'
     * */
    size?: TSwitchSizeToken;
    /**
     * the corresponding width of the switch
     * @default 40
     * */
    width?: TSwitchWidth;
    /**
     * the corresponding width of the switch
     * @default 24
     * */
    height?: TSwitchHeight;
    /**
     * the corresponding width of the switch toggle
     * @default 20
     * */
    innerWidth?: TSwitchInnerWidth;
    /**
     * whether the switch is toggled
     * @default false
     * */
    toggled?: boolean;
    /**
     * whether the switch is disabled for interaction
     * @default false
     * */
    disabled?: boolean;
    /**
     * onClick event handler
     * */
    onClick?: MouseEventHandler<HTMLLabelElement>;
    /**
     * onChange event handler
     * */
    onChange?: () => void;
    /**
     * custom classname
     * */
    className?: string;
};

export type PSwitchRoot = Required<Pick<PSwitch, 'disabled' | 'toggled' | 'size' | 'onClick'>>;

export default PSwitch;
