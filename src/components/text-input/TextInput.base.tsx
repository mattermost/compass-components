import React, { useState } from 'react';

import Grid, { Spacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Shape from '../../foundations/shape';
import { Utils } from '../../shared';
import Icon, { TIconSize } from '../icon';
import Text from '../text';

import {
    DEFAULT_TEXT_INPUT_SIZE,
    DEFAULT_LEADING_ICON,
    DEFAULT_TRAILING_ICON,
} from './TextInput.constants';
import { PTextInput } from './TextInput.props';

const TextInputBase: React.FC<PTextInput> = ({
    label,
    placeholder,
    size = DEFAULT_TEXT_INPUT_SIZE,
    leadingIcon = DEFAULT_LEADING_ICON,
    trailingIcon = DEFAULT_TRAILING_ICON,
    width,
    className,
}: PTextInput) => {
    let iconSize: TIconSize = 16;
    let height = 40;

    const spacing: TSpacingTokensSymmetric = {
        vertical: 0,
        horizontal: 75,
    };

    const hasLabel = Utils.isString(label) && label.length > 0;
    const hasPlaceholder = Utils.isString(placeholder) && placeholder.length > 0;

    switch (size) {
        case 'lg':
            height = 48;
            break;
        case 'sm':
            iconSize = 12;
            height = 32;
            spacing.horizontal = 50;
            break;
        default:
    }

    const [value, setValue] = useState();

    return (
        <Shape
            borderRadius={4}
            width={width === 'full' ? '100%' : width}
            height={height}
            className={className}
        >
            <Grid
                row
                alignment={'center'}
                className={'input'}
                justify={'space-between'}
                padding={Spacing.symmetric(spacing)}
                flex={1}
            >
                {leadingIcon ? <Icon glyph={leadingIcon} size={iconSize} /> : null}
                <input
                    className={'input__field'}
                    value={value}
                    onChange={(event): void => setValue(event.target.value)}
                    placeholder={hasPlaceholder ? placeholder : ''}
                />
                {hasLabel && (
                    <Text element={'span'} className={'input__label'}>
                        {label}
                    </Text>
                )}
                {trailingIcon ? (
                    <Icon glyph={trailingIcon} size={iconSize} onClick={(): void => setValue('')} />
                ) : null}
            </Grid>
        </Shape>
    );
};

export default TextInputBase;
