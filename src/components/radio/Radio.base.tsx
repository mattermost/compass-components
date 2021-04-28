import React from 'react';

import Grid, { Spacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Shape from '../../foundations/shape';
import Text, { TTextSizeToken } from '../text';
import HiddenComponent from '../hidden_component/HiddenComponent';
import { Utils } from '../../shared';

import { DEFAULT_RADIO_SIZE } from './Radio.constants';
import { PRadio } from './Radio.props';
import { TRadioSize } from './Radio.types';

const RadioBase: React.FC<PRadio> = ({
    label,
    size = DEFAULT_RADIO_SIZE,
    onClick,
    className,
    ...rest
}: PRadio) => {
    let labelSize: TTextSizeToken = 100;
    let radioSize: TRadioSize = 16;

    const spacing: TSpacingTokensSymmetric = {
        vertical: 0,
        horizontal: 125,
    };
    const hasLabel = Utils.isString(label) && label.length > 0;

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
            <HiddenComponent
                componentClass={`${className}--input`}
                component={'input'}
                type={'radio'}
            />
            <Shape
                className={`${className}--label`}
                component={'span'}
                type={'radio'}
                width={radioSize}
                height={radioSize}
                borderRadius={'circle'}
                {...rest}
            />
            {hasLabel && (
                <Text element={'span'} size={labelSize} margin={'none'}>
                    {label}
                </Text>
            )}
        </Grid>
    );
};

export default RadioBase;
