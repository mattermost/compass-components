import React from 'react';

import Shape from '../../foundations/shape';
import Grid, { GridSpacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Icon, { TIconSize } from '../icon';
import Text, { TTextSize } from '../text';

import PCheckbox from './Checkbox.props';
import { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_STATE } from './Checkbox.constants';

const CheckboxBase: React.FC<PCheckbox> = ({
    labelText = 'Public',
    state = DEFAULT_CHECKBOX_STATE,
    size = DEFAULT_CHECKBOX_SIZE,
    hideLabel = false,
    className,
    onClick,
}: PCheckbox): JSX.Element => {
    let labelSize: TTextSize = 100;
    let iconSize: TIconSize = 12;

    const textColor = state === 'disabled' ? 'disabled' : 'primary';
    const spacing: TSpacingTokensSymmetric = {
        vertical: 0,
        horizontal: 0,
    };

    switch (size) {
        case 'lg':
            iconSize = 16;
            labelSize = 200;
            spacing.vertical = 25;
            spacing.horizontal = 25;
            break;
        case 'md':
            iconSize = 12;
            labelSize = 75;
            spacing.vertical = 0;
            spacing.horizontal = 0;
            break;
        case 'sm':
            iconSize = 10;
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
            className={className}
            onClick={onClick}
            padding={GridSpacing.symmetric(spacing)}
        >
            <Shape
                className={`${className}--input`}
                component={'input'}
                type={'checkbox'}
                elevation={1}
                elevationOnHover={3}
            />
            <Icon color={'inherit'} glyph="check" size={iconSize} />
            {!hideLabel && (
                <Text color={textColor} margin={'all'} size={labelSize}>
                    <strong>{labelText}</strong>
                </Text>
            )}
        </Grid>
    );
};

export default CheckboxBase;
