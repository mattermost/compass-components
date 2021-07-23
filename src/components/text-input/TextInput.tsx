import React from 'react';

import { Utils } from '../../shared';
import Icon from '../../foundations/icon';
import Text from '../text';

import {
    DEFAULT_TEXT_INPUT_SIZE,
    TEXT_INPUT_VALUES_MAPPING,
    DEFAULT_TEXT_INPUT_WIDTH,
} from './TextInput.constants';
import TextInputRoot from './TextInput.root';
import InputRoot from './Input.root';
import PTextInput from './TextInput.props';

const TextInput: React.FC<PTextInput> = ({
    label,
    placeholder,
    value,
    leadingIcon,
    trailingIcon,
    backgroundColor,
    size = DEFAULT_TEXT_INPUT_SIZE,
    width = DEFAULT_TEXT_INPUT_WIDTH,
    active = false,
    hasError = false,
    disabled = false,
    animatedLabel = true,
    onClear = Utils.noop,
    onFocus = Utils.noop,
    onChange = Utils.noop,
    ...rest
}: PTextInput) => {
    const { iconSize } = TEXT_INPUT_VALUES_MAPPING[size];

    const hasLabel = Utils.isString(label) && label.length > 0;
    const rootProperties = {
        size,
        active,
        hasError,
        disabled,
        animatedLabel,
        backgroundColor,
        width,
        onClear,
        value,
        onFocus,
    };

    return (
        <TextInputRoot {...rootProperties} {...rest}>
            {leadingIcon && leadingIcon !== 'none' && <Icon glyph={leadingIcon} size={iconSize} />}
            <InputRoot
                value={value || ''}
                placeholder={
                    Utils.isString(placeholder) && placeholder.length > 0 ? placeholder : ''
                }
                onChange={onChange}
            />
            {hasLabel && <Text element={'span'}>{label}</Text>}
            {trailingIcon && trailingIcon !== 'none' && (
                <Icon glyph={trailingIcon} className={'clear'} size={iconSize} onClick={onClear} />
            )}
        </TextInputRoot>
    );
};

export default TextInput;
