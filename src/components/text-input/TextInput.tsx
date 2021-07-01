import React from 'react';

import { Utils } from '../../shared';
import Icon from '../../foundations/icon';

import {
    DEFAULT_TEXT_INPUT_SIZE,
    TEXT_INPUT_VALUES_MAPPING,
    DEFAULT_TEXT_INPUT_WIDTH,
} from './TextInput.constants';
import TextInputRoot from './TextInput.root';
import InputRoot from './Input.root';
import PTextInput from './TextInput.props';
import LabelRoot from './Label.root';

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
            {hasLabel && (
                <LabelRoot
                    size={size}
                    value={value || ''}
                    leadingIcon={leadingIcon}
                    animatedLabel={animatedLabel}
                    backgroundColor={backgroundColor}
                >
                    {label}
                </LabelRoot>
            )}
            {trailingIcon && trailingIcon !== 'none' && (
                <Icon glyph={trailingIcon} size={iconSize} onClick={onClear} />
            )}
        </TextInputRoot>
    );
};

export default TextInput;
