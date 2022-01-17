import React from 'react';

import Icon from '../../foundations/icon';
import Shape from '../../foundations/shape';
import Grid from '../../utilities/grid';
import Text from '../text';
import { Utils } from '../../shared';

import type PCheckbox from './Checkbox.props';
import { CHECKBOX_VALUES_MAPPING, DEFAULT_CHECKBOX_SIZE } from './Checkbox.constants';
import CheckboxRoot from './Checkbox.root';

const Checkbox: React.FC<PCheckbox> = (props: PCheckbox): JSX.Element => {
    const {
        label,
        size = DEFAULT_CHECKBOX_SIZE,
        checked = false,
        disabled = false,
        hasError = false,
        onChange = Utils.noop,
        ...rest
    } = props;

    Utils.assert(
        hasError && disabled,
        'A Checkbox cannot have props `disabled` and `hasError` enabled at the same time.',
        true
    );

    const hasLabel = Utils.isString(label) && label.length > 0;

    const rootProperties = {
        size,
        hasError,
        disabled,
        checked,
    };

    const { checkboxSize, iconSize, labelSize } = CHECKBOX_VALUES_MAPPING[size];

    return (
        <CheckboxRoot {...rootProperties} {...rest}>
            <input type={'checkbox'} checked={checked} onChange={onChange} />
            <Grid
                element={Shape}
                placeItems={'center'}
                width={checkboxSize}
                height={checkboxSize}
                radius={2}
            >
                <Icon glyph={checked ? 'check' : 'none'} size={iconSize} />
            </Grid>
            {hasLabel && (
                <Text element={'span'} size={labelSize} margin={'none'}>
                    {label}
                </Text>
            )}
        </CheckboxRoot>
    );
};

export default Checkbox;
