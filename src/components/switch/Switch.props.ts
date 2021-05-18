import { TSwitchSizeToken, TSwitchWidth, TSwitchHeight, TSwitchInnerWidth } from './Switch.types';

export type PSwitch = {
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
    onClick?: () => void;
    /**
     * custom classname
     * */
    className?: string;
};
