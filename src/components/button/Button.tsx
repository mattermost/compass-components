import React from 'react';

import { TSpacingTokensSymmetric } from '../../foundations/layout';
import { Utils } from '../../shared';
import Icon, { TIconSize } from '../icon';
import Text, { TTextSizeToken } from '../text';

import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from './Button.constants';
import PButton from './Button.props';
import ButtonRoot from './Button.root';

const Button: React.FC<PButton> = ({
    destructive = false,
    inverted = false,
    disabled = false,
    size = DEFAULT_BUTTON_SIZE,
    variant = DEFAULT_BUTTON_VARIANT,
    label,
    icon,
    iconPosition,
    onClick,
    ...rest
}: PButton) => {
    let labelSize: TTextSizeToken = 100;
    let iconSize: TIconSize = 16;

    const spacing: TSpacingTokensSymmetric = {
        vertical: 0,
        horizontal: 125,
    };

    switch (size) {
        case 'large':
            labelSize = 200;
            iconSize = 20;
            spacing.horizontal = 150;
            break;
        case 'small':
            labelSize = 75;
            iconSize = 12;
            // line-height on text is 16, so there is no need to adjust paddings
            spacing.horizontal = 100;
            break;
        case 'medium':
        default:
    }

    const rootProperties = {
        disabled: disabled || !Utils.isFunction(onClick),
        destructive,
        inverted,
        size,
        variant,
        onClick,
        ...rest,
    };

    return (
        <ButtonRoot {...rootProperties}>
            {icon && iconPosition === 'start' ? <Icon glyph={icon} size={iconSize} /> : null}
            <Text
                element={'span'}
                size={labelSize}
                margin={'none'}
                weight={'bold'}
                color={'inherit'}
                inheritLineHeight
            >
                {label}
            </Text>
            {icon && iconPosition === 'end' ? <Icon glyph={icon} size={iconSize} /> : null}
        </ButtonRoot>
    );
};

export default Button;
