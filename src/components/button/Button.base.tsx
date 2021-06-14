import React from 'react';

import { TSpacingTokensSymmetric } from '../../foundations/layout';
import Icon, { TIconSize } from '../icon';
import Text, { TTextSizeToken } from '../text';

import { PButton } from './Button.props';

const ButtonBase: React.FC<PButton> = ({
    label,
    icon,
    iconPosition,
    size,
    onClick,
    className,
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

    return (
        <button onClick={onClick} className={className}>
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
        </button>
    );
};

export default ButtonBase;
