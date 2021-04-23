import React from 'react';

import Grid, { Spacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Shape from '../../foundations/shape';
import Text, { TTextSizeToken } from '../text';

import { TSwitchWidths, TSwitchHeights, TSwitchInnerWidths } from './Switch.types';
import {
    DEFAULT_SWITCH_HEIGHT,
    DEFAULT_SWITCH_WIDTH,
    DEFAULT_SWITCH_INNER_WIDTH,
    DEFAULT_SWITCH_SIZE,
} from './Switch.constants';
import { PSwitch } from './Switch.props';

const SwitchBase: React.FC<PSwitch> = ({
    labelText = 'Public',
    size = DEFAULT_SWITCH_SIZE,
    className,
    onClick,
    ...rest
}: PSwitch) => {
    let labelSize: TTextSizeToken = 100;
    let switchHeight: TSwitchHeights = DEFAULT_SWITCH_HEIGHT;
    let switchWidth: TSwitchWidths = DEFAULT_SWITCH_WIDTH;
    let switchInnerWidth: TSwitchInnerWidths = DEFAULT_SWITCH_INNER_WIDTH;

    const spacing: TSpacingTokensSymmetric = {
        vertical: 0,
        horizontal: 125,
    };

    switch (size) {
        case 'lg':
            switchHeight = 32;
            switchWidth = 52;
            switchInnerWidth = 26;
            labelSize = 200;
            spacing.vertical = 25;
            spacing.horizontal = 25;
            break;
        case 'sm':
            switchHeight = 16;
            switchWidth = 26;
            switchInnerWidth = 12;
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
            className={`${className}--toggle`}
        >
            <Shape
                className={`${className}--checkbox`}
                component={'input'}
                type={'checkbox'}
                id={'switch'}
                {...rest}
            />
            <Shape
                className={`${className}--background`}
                width={switchWidth}
                height={switchHeight}
                borderRadius={'pill'}
            >
                <Shape
                    borderRadius={'circle'}
                    width={switchInnerWidth}
                    className={`${className}--button`}
                />
            </Shape>
            <Text
                element={'label'}
                htmlFor={'switch'}
                className={`${className}--label`}
                size={labelSize}
                inheritLineHeight
            >
                {labelText}
            </Text>
        </Grid>
    );
};

export default SwitchBase;
