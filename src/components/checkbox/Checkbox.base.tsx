import React from 'react';

import Shape from '../../foundations/shape';
import Grid, { GridSpacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Icon, { TIconSize } from '../icon';
import Text, { TTextSize } from '../text';

import PCheckbox from './Checkbox.props';

const CheckboxBase: React.FC<PCheckbox> = ({
    labelText = 'Public',
    size,
    hideLabel = false,
    className,
}: PCheckbox): JSX.Element => {
    let labelSize: TTextSize = 100;
    let checkboxSize = 20;

    const iconSize: TIconSize = 12;

    const spacing: TSpacingTokensSymmetric = {
        vertical: 0,
        horizontal: 0,
    };

    switch (size) {
        case 'lg':
            labelSize = 200;
            checkboxSize = 20;
            spacing.vertical = 25;
            spacing.horizontal = 25;
            break;
        case 'md':
            labelSize = 75;
            checkboxSize = 14;
            spacing.vertical = 0;
            spacing.horizontal = 0;
            break;
        case 'sm':
            labelSize = 75;
            checkboxSize = 12;
            spacing.vertical = 0;
            spacing.horizontal = 0;
            break;
        default:
            break;
    }

    return (
        <Grid row alignment={'center'} justify={'center'} className={className}>
            <Shape
                borderRadius={4}
                elevation={1}
                elevationOnHover={3}
                width={checkboxSize}
                height={checkboxSize}
            >
                <Grid
                    alignment={'center'}
                    justify={'center'}
                    flex={1}
                    padding={GridSpacing.symmetric(spacing)}
                >
                    <Icon color={'inherit'} glyph="check" size={iconSize} />
                </Grid>
            </Shape>
            {!hideLabel && (
                <Text margin={'all'} size={labelSize}>
                    <strong>{labelText}</strong>
                </Text>
            )}
        </Grid>
    );
};

export default CheckboxBase;
