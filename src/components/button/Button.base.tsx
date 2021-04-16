import React from 'react';

import Grid, { Spacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Shape from '../../foundations/shape';
import Text, { TTextSizeToken } from '../text';

import { PButton } from './Button.props';

const ButtonBase: React.FC<PButton> = ({
    label,
    leadingIcon,
    trailingIcon,
    size,
    width,
    ...rest
}: PButton) => {
    let labelSize: TTextSizeToken = 100;

    const hasIcon = leadingIcon || trailingIcon;
    const spacing: TSpacingTokensSymmetric = {
        vertical: 75,
        horizontal: 125,
    };

    switch (size) {
        case 'large':
            labelSize = 200;
            spacing.vertical = hasIcon ? 75 : 100;
            spacing.horizontal = 150;
            break;
        case 'small':
            labelSize = 75;
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
                padding={Spacing.symmetric(spacing)}
                flex={1}
            >
                <Text
                    element={'span'}
                    size={labelSize}
                    margin={'none'}
                    weight={'bold'}
                    inheritLineHeight
                >
                    {label}
                </Text>
            </Grid>
        </Shape>
    );
};

export default ButtonBase;
