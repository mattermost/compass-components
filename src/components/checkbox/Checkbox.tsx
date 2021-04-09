import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import Shape from '../../foundations/shape';
import Grid, { GridSpacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Text, { TTextSize } from '../text';
import Icon, { TIconSize } from '../icon';

import PCheckbox from './Checkbox.props';
import { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_STATE } from './Checkbox.constants';

const CheckboxBase: React.FC<PCheckbox> = ({
    labelText = 'Public',
    state = DEFAULT_CHECKBOX_STATE,
    size = DEFAULT_CHECKBOX_SIZE,
    hideLabel = false,
    className,
}: PCheckbox): JSX.Element => {
    let labelSize: TTextSize = 100;
    let checkboxSize = 20;

    const iconSize: TIconSize = 12;

    let background = 'var(--shape-background-color)';
    let borderColor = 'inherit';

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

    switch (state) {
        case 'on':
            background = 'var(--primary-color-main, blue)';
            borderColor = 'var(--primary-color-main, blue)';
            break;
        case 'off':
            background = 'var(--shape-background-color)';
            borderColor = 'black';
            break;
        case 'status':
            background = 'var(--shape-background-color)';
            borderColor = 'red';
            break;
        case 'disabled':
            background = 'var(--disabled-text-color)';
            break;
        default:
            break;
    }

    return (
        <>
            <Shape
                borderRadius={4}
                elevation={1}
                elevationOnHover={3}
                background={background}
                width={checkboxSize}
                height={checkboxSize}
            >
                <Grid
                    alignment={'center'}
                    justify={'center'}
                    flex={1}
                    padding={GridSpacing.symmetric(spacing)}
                >
                    <Icon glyph="check" size={iconSize} />
                </Grid>
            </Shape>
            {!hideLabel && (
                <Text size={labelSize}>
                    <strong>{labelText}</strong>
                </Text>
            )}
        </>
    );
};

const Checkbox = styled(CheckboxBase).attrs((props: PCheckbox) => ({
    className: clsx(props.className, 'Checkbox'),
}))<PCheckbox>`
    'color':'white', ;
`;

export default Checkbox;
