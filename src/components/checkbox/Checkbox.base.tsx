import React from 'react';

import Shape from '../../foundations/shape';
import Grid from '../../foundations/layout';
import Icon, { TIconSize } from '../icon';
import Text, { TTextSizeToken } from '../text';
import { Utils } from '../../shared';

import PCheckbox from './Checkbox.props';
import { DEFAULT_CHECKBOX_SIZE } from './Checkbox.constants';

const CheckboxBase: React.FC<PCheckbox> = ({
    label = 'Public',
    size = DEFAULT_CHECKBOX_SIZE,
    className,
    onClick,
    checked,
}: PCheckbox): JSX.Element => {
    let labelSize: TTextSizeToken = 100;
    let iconSize: TIconSize = 12;
    let checkboxSize: TCheckboxSize = 16;

    const hasLabel = Utils.isString(label) && label.length > 0;

    switch (size) {
        case 'lg':
            iconSize = 16;
            checkboxSize = 20;
            labelSize = 200;
            break;
        case 'sm':
            iconSize = 10;
            checkboxSize = 14;
            labelSize = 75;
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
            className={className}
        >
            <Text element={'label'} for="hidden__input">
                <input className={'input'} id="hidden__input" checked={checked} type={'checkbox'} />
                <Shape
                    component={'span'}
                    className={'control'}
                    width={checkboxSize}
                    height={checkboxSize}
                    borderRadius={2}
                >
                    <Icon glyph="check" size={iconSize} />
                </Shape>
            </Text>
            {hasLabel && (
                <Text element={'span'} className={'label'} size={labelSize}>
                    {label}
                </Text>
            )}
        </Grid>
    );
};

export default CheckboxBase;