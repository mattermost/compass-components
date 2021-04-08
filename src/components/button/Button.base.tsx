import React from 'react';

import Grid, { GridSpacing } from '../../foundations/layout';
import Shape from '../../foundations/shape';
import Icon, { TIconGlyph } from '../icon';
import Text, { TTextSize } from '../text';

import { PButton, PButtonBase } from './Button.props';

const ButtonBase: React.FC<PButtonBase> = ({
    label,
    leadingIcon,
    trailingIcon,
    size,
    width,
    ...rest
}: PButton) => {
    const getIcon = (glyph: TIconGlyph, iconPosition: 'leading' | 'trailing'): JSX.Element => (
        <Icon glyph={glyph} className={`Button_Icon--${iconPosition}`} />
    );

    let labelSize: TTextSize = 100;

    switch (size) {
        case 'large':
            labelSize = 200;
            break;
        case 'small':
            labelSize = 75;
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
            <Grid alignment={'center'} justify={'center'} padding={GridSpacing.all(75)} flex={1}>
                {leadingIcon && getIcon(leadingIcon, 'leading')}
                <Text element={'span'} size={labelSize} margin={'none'} weight={'bold'}>
                    {label}
                </Text>
                {trailingIcon && getIcon(trailingIcon, 'trailing')}
            </Grid>
        </Shape>
    );
};

export default ButtonBase;
