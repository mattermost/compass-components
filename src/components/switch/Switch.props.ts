import { TSwitchSize, TSwitchWidth, TSwitchHeight, TSwitchInnerWidth } from './Switch.types';

export type PSwitch = {
    /**
     * whether the switch button is rendered with a label
     * @default 'Public'
     * */
    label?: string;
    /**
     * whether the switch button has an error
     * @default false
     * */
    hasError?: boolean;
    /**
     * the size of the switch
     * @default 'md'
     * */
    size?: TSwitchSize;
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
     * whether the switch button is disabled for interaction
     * @default false
     * */
    disabled?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
