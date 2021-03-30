import React from 'react';

import Shape from '../../foundations/shape';
import Grid, { GridSpacing } from '../../foundations/layout';
import Text from '../text';
import Icon from '../icon';

import PCheckbox from './Checkbox.props';
import { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_STATE } from './Checkbox.constants';

const Checkbox: React.FC<PCheckbox> = ({
    labelText = 'Public',
    state = DEFAULT_CHECKBOX_STATE,
    size = DEFAULT_CHECKBOX_SIZE,
    hideLabel = false,
}: PCheckbox): JSX.Element => {
    let background = 'var(--shape-background-color)';
    let icon = <></>;

    switch (state) {
        case 'on':
            background = 'var(--primary-color-main, blue)';
            icon = <Icon glyph="checkbox" />;
            break;
        case 'off':
            background = 'var(--shape-background-color)';
            break;
        case 'status':
            background = '--shape-background-color';
            break;
        case 'disabled':
            background = 'var(--disabled-text-color)';
            break;
        default:
            break;
    }

    return (
        <Grid
            row={true}
            alignment={'center'}
            justify={'center'}
            flex={1}
            padding={GridSpacing.symmetric({ vertical: 0, horizontal: 50 })}
        >
            <Shape
                borderRadius={4}
                elevation={1}
                elevationOnHover={3}
                background={background}
                width={size}
            >
                <Grid
                    alignment={'center'}
                    justify={'center'}
                    flex={1}
                    padding={GridSpacing.symmetric({ vertical: 0, horizontal: 0 })}
                >
                    {icon}
                </Grid>
            </Shape>
            {!hideLabel && (
                <Text element={'p'} size={50} color={'primary'} margin={'none'}>
                    <strong>{labelText}</strong>
                </Text>
            )}
        </Grid>
    );
};

export default Checkbox;
