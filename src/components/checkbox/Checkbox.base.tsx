import React from 'react';

import Shape from '../../foundations/shape';
import Grid from '../../foundations/layout';
import Icon, { TIconSize } from '../icon';
import Text, { TTextSizeToken } from '../text';

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
    let labelSize: TTextSizeToken = 100;
    let iconSize: TIconSize = 12;

    const textColor = state === 'disabled' ? 'disabled' : 'primary';

    switch (size) {
        case 'lg':
            iconSize = 16;
            labelSize = 200;
            break;
        case 'md':
            iconSize = 12;
            labelSize = 75;
            break;
        case 'sm':
            iconSize = 10;
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
            className={className}
            onClick={onClick}
        >
            <Shape
                className={`${className}--input`}
                component={'input'}
                type={'checkbox'}
                elevation={1}
                elevationOnHover={3}
            />
            <Icon glyph="check" size={iconSize} />
            {!hideLabel && (
                <Text color={textColor} size={labelSize}>
                    <strong>{labelText}</strong>
                </Text>
            )}
        </Grid>
    );
};

export default CheckboxBase;
