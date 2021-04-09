import React from 'react';

import Grid, { GridSpacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Shape from '../../foundations/shape';
import Icon, { TIconSize } from '../icon';
import Text, { TTextSize } from '../text';

import { PButton, PButtonBase } from './Button.props';

const ButtonBase: React.FC<PButtonBase> = ({
    label,
    leadingIcon,
    trailingIcon,
    size,
    width,
    ...rest
}: PButton) => {
    let labelSize: TTextSize = 100;
    let iconSize: TIconSize = 18;

    const hasIcon = leadingIcon || trailingIcon;
    const spacing: TSpacingTokensSymmetric = {
        vertical: 75,
        horizontal: 125,
    };

    switch (size) {
        case 'large':
            labelSize = 200;
            iconSize = 24;
            spacing.vertical = hasIcon ? 75 : 100;
            spacing.horizontal = 150;
            break;
        case 'small':
            labelSize = 75;
            iconSize = 14;
            // line-height on text is 16, so there is no need to adjust paddings
            spacing.vertical = 50;
            spacing.horizontal = 100;
            break;
        case 'medium':
        default:
    }

    return (
        <Shape
            component={'button'}
            borderRadius={4}
            width={width === 'full' ? '100%' : width}
            {...rest}
        >
            <Grid
                row
                alignment={'center'}
                justify={'center'}
                padding={GridSpacing.symmetric(spacing)}
                flex={1}
            >
                {leadingIcon && <Icon glyph={leadingIcon} size={iconSize} />}
                <Text
                    element={'span'}
                    size={labelSize}
                    margin={'none'}
                    weight={'bold'}
                    inheritLineHeight
                >
                    {label}
                </Text>
                {trailingIcon && <Icon glyph={trailingIcon} size={iconSize} />}
            </Grid>
        </Shape>
    );
};

export default ButtonBase;
