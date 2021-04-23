import React from 'react';

import Grid, { Spacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Shape from '../../foundations/shape';
import { TIconSize } from '../icon';
import Text, { TTextSizeToken } from '../text';

import { DEFAULT_RADIO_SIZE } from './Radio.constants';
import { PRadio } from './Radio.props';

const RadioBase: React.FC<PRadio> = ({
    labelText = 'Public',
    size = DEFAULT_RADIO_SIZE,
    className,
    onClick,
    ...rest
}: PRadio) => {
    let labelSize: TTextSizeToken = 100;
    let radioSize: TIconSize = 16;

    const spacing: TSpacingTokensSymmetric = {
        vertical: 0,
        horizontal: 125,
    };

    switch (size) {
        case 'lg':
            radioSize = 20;
            labelSize = 200;
            spacing.vertical = 25;
            spacing.horizontal = 25;
            break;
        case 'md':
            radioSize = 16;
            labelSize = 100;
            spacing.vertical = 0;
            spacing.horizontal = 0;
            break;
        case 'sm':
            radioSize = 12;
            labelSize = 75;
            spacing.vertical = 0;
            spacing.horizontal = 0;
            break;
        default:
            break;
    }

    return (
        <Grid
            row
            alignment={'center'}
            justify={'center'}
            flex={1}
            onClick={onClick}
            padding={Spacing.symmetric(spacing)}
        >
            <Shape
                className={className}
                component={'input'}
                type={'radio'}
                borderRadius={'circle'}
                width={radioSize}
                {...rest}
            />
            <Text element={'label'} size={labelSize} margin={'none'} inheritLineHeight>
                {labelText}
            </Text>
        </Grid>
    );
};

export default RadioBase;