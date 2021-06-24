import React from 'react';

import { Utils } from '../../shared';
import Icon from '../../foundations/icon';

import { DEFAULT_TEXT_INPUT_SIZE, TEXT_INPUT_VALUES_MAPPING } from './TextInput.constants';
import TextInputRoot from './TextInput.root';
import InputRoot from './Input.root';
import PTextInput from './TextInput.props';
import LabelRoot from './Label.root';

const TextInput: React.FC<PTextInput> = ({
    label,
    placeholder,
    size = DEFAULT_TEXT_INPUT_SIZE,
    value,
    leadingIcon,
    trailingIcon,
    active,
    onClear,
    onChange,
    ...rest
}: PTextInput) => {
    const { iconSize } = TEXT_INPUT_VALUES_MAPPING[size];

    const hasLabel = Utils.isString(label) && label.length > 0;
    const hasPlaceholder = Utils.isString(placeholder) && placeholder.length > 0;
    const isClearable = Utils.isFunction(onClear);
    const onClearInput = (): void => (isClearable ? onClear : null);

    return (
        <TextInputRoot size={size} active={active} {...rest}>
            {leadingIcon && leadingIcon !== 'none' && <Icon glyph={leadingIcon} size={iconSize} />}
            <InputRoot
                value={value}
                placeholder={hasPlaceholder ? placeholder : ''}
                onChange={onChange}
            />
            {hasLabel && (
                <LabelRoot size={size} {...rest}>
                    {label}
                </LabelRoot>
            )}
            {trailingIcon && trailingIcon !== 'none' && (
                <Icon glyph={trailingIcon} size={iconSize} onClick={onClearInput} />
            )}
        </TextInputRoot>
    );
};

export default TextInput;
