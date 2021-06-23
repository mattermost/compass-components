import React from 'react';

import { Utils } from '../../shared';
import Icon from '../../foundations/icon';
import Text from '../text';

import { TEXT_INPUT_VALUES_MAPPING } from './TextInput.constants';
import TextInputRoot from './TextInput.root';
import PTextInput from './TextInput.props';

const TextInput: React.FC<PTextInput> = ({
    label,
    placeholder,
    size,
    leadingIcon,
    trailingIcon,
    width,
    onClear,
    ...rest
}: PTextInput) => {
    const { iconSize, labelSize } = TEXT_INPUT_VALUES_MAPPING[size];

    const hasLabel = Utils.isString(label) && label.length > 0;
    const hasPlaceholder = Utils.isString(placeholder) && placeholder.length > 0;
    const isClearable = Utils.isFunction(onClear);
    const onClearInput = (): void => (isClearable ? onClear : null);

    return (
        <TextInputRoot size={size} width={width} leadingIcon={leadingIcon} {...rest}>
            {leadingIcon !== 'none' && <Icon glyph={leadingIcon} size={iconSize} />}
            <input className={'input__field'} placeholder={hasPlaceholder ? placeholder : ''} />
            {hasLabel && (
                <Text element={'span'} size={labelSize} className={'input__label'}>
                    {label}
                </Text>
            )}
            {trailingIcon !== 'none' && (
                <Icon glyph={trailingIcon} size={iconSize} onClick={onClearInput} />
            )}
        </TextInputRoot>
    );
};

export default TextInput;
